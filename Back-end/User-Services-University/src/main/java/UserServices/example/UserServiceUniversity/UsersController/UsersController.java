package UserServices.example.UserServiceUniversity.UsersController;

import UserServices.example.UserServiceUniversity.Models.Users;
import UserServices.example.UserServiceUniversity.Models.UsersPrincipal;
import UserServices.example.UserServiceUniversity.UsersDtos.UsersDtos;
import UserServices.example.UserServiceUniversity.UsersService.JwtService;
import UserServices.example.UserServiceUniversity.UsersService.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/University/Users")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/Register")
    public String addNewUser(@RequestBody Users users)
    {
        usersService.saveUser(users);
        return "Users are saved successfully";
    }

    @PostMapping("/Login")
    public Object LoginToA_NewUser(@RequestBody UsersDtos usersDtos) {
        try
        {
            Map<String,Object> Response = new HashMap<>();
            Authentication authenticated = authenticationManager.authenticate
                    (
                            new UsernamePasswordAuthenticationToken(usersDtos.getUsername(), usersDtos.getPassword())
                    );
            UsersPrincipal usersPrincipal = (UsersPrincipal) authenticated.getPrincipal();

            String Token = jwtService.generateToken
                    (
                        usersPrincipal.GetUserId(),
                        usersPrincipal.getUsername()
                    );
            Response.put("Token ",Token);
            Response.put("Role ",usersPrincipal.getAuthorities());
            return Response;
        }
        catch (Exception e)
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid User name or password");
        }
    }
}
