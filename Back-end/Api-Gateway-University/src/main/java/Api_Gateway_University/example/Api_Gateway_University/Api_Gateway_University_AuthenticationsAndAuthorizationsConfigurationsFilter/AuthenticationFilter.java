package Api_Gateway_University.example.Api_Gateway_University.Api_Gateway_University_AuthenticationsAndAuthorizationsConfigurationsFilter;

import Api_Gateway_University.example.Api_Gateway_University.JwtService.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator routeValidator;

    @Autowired
    private JwtService jwtService;

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();

            if (!routeValidator.isSecured.test(request)) {
                return chain.filter(exchange);  // NO MODIFICATION NEEDED
            }

            // Only for secured endpoints
            List<String> authHeaders = request.getHeaders().get(HttpHeaders.AUTHORIZATION);
            if (authHeaders == null || authHeaders.isEmpty()) {
                throw new RuntimeException("Missing authorization header");
            }

            String token = authHeaders.get(0);
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }

            try {
                if (!jwtService.validateToken(token)) {
                    throw new RuntimeException("Invalid token");
                }

                String username = jwtService.extractUsername(token);

                String UserId = jwtService.extractUserId(token);

                ServerHttpRequest modifiedRequest = request.mutate()
                        .header("X-UserId",UserId)
                        .header("X-UserName", username)
                        .build();

                return chain.filter(exchange.mutate().request(modifiedRequest).build());

            } catch (Exception e) {
                System.out.println("Authentication error: " + e.getMessage());
                throw new RuntimeException("Unauthorized access: " + e.getMessage());
            }
        });
    }

    public static class Config {}
}
