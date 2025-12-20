package UserServices.example.UserServiceUniversity.UsersRepository;

import UserServices.example.UserServiceUniversity.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository  extends JpaRepository<Users,Integer> {
    public Users findByUsername(String username);
}
