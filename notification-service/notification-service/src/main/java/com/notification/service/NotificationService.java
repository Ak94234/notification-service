package com.notification.service;

import com.notification.model.Notification;
import com.notification.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository repository;

    public Notification sendNotification(Notification notification) {
        notification.setDelivered(true); // simulate delivery
        return repository.save(notification);
    }

    public List<Notification> getUserNotifications(Long userId) {
        return repository.findByUserId(userId);
    }
}
