package UserServices.example.UserServiceUniversity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class UserServicesUniversityApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServicesUniversityApplication.class, args);
	}

}
