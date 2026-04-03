package com.evorobotics.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sensor {
    private String name;
    private String superpower;
    private String description;
    private String pins;
    private String voltage;
    private String signalType;
    private String liveValue;
}