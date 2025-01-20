package com.financial.dto.request.auth;
import jakarta.validation.constraints.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDto {
    @Email(message = "invalid email entered")
    @NotBlank(message = "Email must be required")
    private String email;

    @NotBlank(message = "Password cannot be empty")
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            message = "The password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
    )
    private String password;

    @NotBlank(message = "Password confirmation cannot be empty")
    private String confirmPassword;

    @AssertTrue(message = "Passwords do not match")
    private boolean isValidPassword() {
        return password != null && password.equals(confirmPassword);
    }

    @NotBlank(message = "name must be required")
    @Size(min = 1, max = 30, message = "Min length is 8, Max length is 30")
    private String name;

    @NotBlank(message = "name must be required")
    @Size(min = 1, max = 30, message = "Min length is 8, Max length is 30")
    private String lastname;

    @NotBlank
    @Pattern(regexp = "^[0-9A-Za-z]{8,9}$", message = "El DNI debe tener entre 8 y 9 caracteres, que pueden ser dígitos o letras (A-Z, a-z).")
    private String dni;
    private Boolean userType;
}
