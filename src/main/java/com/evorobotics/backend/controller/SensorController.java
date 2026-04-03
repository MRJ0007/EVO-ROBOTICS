package com.evorobotics.backend.controller;

import com.evorobotics.backend.model.Sensor;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/sensors")
@CrossOrigin(origins = "*")
public class SensorController {

    @GetMapping
    public List<Sensor> getSensors() {
        return Arrays.asList(
                new Sensor("Ultrasonic HC-SR04", "Proximity Detection", "Uses sonar to measure distance.", "Trig(D9), Echo(D10)", "5V", "Digital", "42 cm"),
                new Sensor("LDR Module", "Light Intensity", "Detects brightness levels.", "A0 (Analog)", "5V", "Analog", "612 units"),
                new Sensor("IR Tracker", "Line Following", "Detects black/white surfaces.", "D2 (Digital)", "3.3V-5V", "Digital", "Line Detected"),
                new Sensor("Servo MG995", "Angular Motion", "Rotates precisely from 0-180°.", "PWM (D6)", "4.8V-7.2V", "PWM", "90° Position"),
                new Sensor("DHT11", "Climate Sensing", "Measures Temp & Humidity.", "D7 (Data)", "3V-5V", "Digital", "28°C / 45%")
        );
    }
}