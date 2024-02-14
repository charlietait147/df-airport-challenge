# Domain Models and Test Plan

**BENEFITS OF SOFTWARE**

- The software is able to help the air traffic controllers organise efficiently the number of planes that can land and take off at any one time.

- The software will help air traffic controllers keep track of airplanes. Reduce any chance of miscommunication to pilots on landing and taking off planes. Ensure minimal waiting time for planes to unload passengers at the airport.

- Potential operation downtime of the software so a response plan is needed. This could disrupt the flow of planes and cause delays.It does not handle what would happen if 2 planes try to land in the airport at the same time. It could lead to collisions. Allowing the capacity to be overridden can lead to issues such as congestion at the airport.

**USER STORIES**

![Screenshot](https://drive.google.com/file/d/13oxqFuYACvPPdW6P0fE6bGHJbAHdtsxg/view?usp=sharing)

**DOMAIN MODELS**

1. As an Air Traffic Controller, I want to define a maximum capacity of planes, to ensure that there is enough room to hold all airplanes.

| Objects | Properties     | Messages          | Output |
|---------|------------    |-------------------|--------|
| Airport | Capacity(@int) | setCapacity(@int) | void() |  
|         |                |                   |        |  

2. As an Air Traffic Controller, I want the ability to override the capacity, in case of any emergency.

| Objects | Properties | Messages          | Output |
|---------|------------|-------------------|--------|
| Airport | Capacity() | setCapacity(@int) | void() |  
|         |            |                   |        |


3. As an Air Traffic Controller, I want  to instruct to land a plane at an airport, if the airport is not full to ensure that it doesn't exceed maximum capacity.

| Objects  | Properties    | Messages        | Output    |
|----------|---------------|-----------------|-----------|
| Airport  | Capacity @int | isAirportFull() | boolean() |   
| Airplane | id @String    | land()          | void()    |   
|          |               |                 |           |   

4. As an Air Traffic Controller, I want to instruct to land a plane at an airport, if the plane is not at the airport already to avoid any miscommunication.

| Objects  | Properties                 | Messages           | Output    |   
|----------|----------------------------|--------------------|-----------|
| Airport  | Airplanes @Array[Airplane] | containsAirplane() | boolean() |   
| Airplane | id @String                 | land()             | void()    |   
|          |                            |                    |           |   

5. As an Air Traffic Controller, I want to instruct to take off a plane as long as its at the airport, to avoid any miscommunication.

| Objects  | Properties                 | Messages           | Output    |   
|----------|----------------------------|--------------------|-----------|
| Airport  | Airplanes @Array[Airplane] | containsAirplane() | boolean() | 
| Airplane | id @String                 | takeOff()          | void()    |
|          |                            |                    |           | 




