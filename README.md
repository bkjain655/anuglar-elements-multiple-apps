# Multiple Applications

This project has 2 Internal Apps.
1. Elements - App 1
2. Elements - App 2

First run elements app1 on Port - 4300 using command `ng serve --project=elements-app1 --port=4300` 
Then run elements app2 on Port 4301 using  command `ng serve --project=elements-app1 --port=4301` 

Now, when you open `http://localhost:4301/` You can observe Elements App1 Custom Webcomponent is shown in App2.

1 Observation : You can't pass Input parameter to app1 component when it is used in another app. But if you are using the same web component in same application then you can pass custom value as Input property.
Please let me know if this is not case and if there is any way to pass it.
