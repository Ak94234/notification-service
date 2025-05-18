package com.notification.controller;

import com.notification.model.Notification;
import com.notification.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")

public class NotificationController {

    @Autowired
    private NotificationService service;

    @PostMapping("/notifications")
    public Notification sendNotification(@RequestBody Notification notification) {
        return service.sendNotification(notification);
    }

    @GetMapping("/users/{id}/notifications")
    public List<Notification> getUserNotifications(@PathVariable Long id) {
        return service.getUserNotifications(id);
    }
}
