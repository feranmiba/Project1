import React from 'react';
 /*HEAD*/
import './NotificationPage.css';

/*export const NotificationPage = () => {}
    return (
        <div className="notification-screen"> 
        <div className="status-bar">
                <img src="https://placeholder.pics/svg/375x44" alt="Status Bar" />
             </div>
            
            <div className="action-bar"> 
                <img src="https://placeholder.pics/svg/22x22" alt="Back Arrow" className="back-arrow" />
                <span className="title">Notification</span>
                <img src="https://placeholder.pics/svg/22x22" alt="More" className="more-icon" />
            </div>
            <div className="notification-list">
                {notifications.map((notification, index) => (
                    <div key={index} className="notification-item">
                        <img src={`https://placeholder.pics/svg/45x45?text=Avatar+${index+1}`} alt="Avatar" className="avatar" />
                        <div className="notification-text">
                            <span className="notification-content">{notification.content}</span>
                            <span className="notification-time">{notification.time}</span>
                        </div>
                        {notification.showActions && (
                            <div className="notification-actions">
                                <button className="reject-button">Reject</button>
                                <button className="accept-button">Accept</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
         </div>
    );
  

const notifications = [
    { content: "David Silbia Invite Jo Malone London’s Mother’s", time: "Just now", showActions: true },
    { content: "Adnan Safi Started following you", time: "5 min ago", showActions: false },
    { content: "Joan Baker Invite A virtual Evening of Smooth Jazz", time: "20 min ago", showActions: true },
    { content: "Ronald C. Kinch Like your events", time: "1 hr ago", showActions: false },
    { content: "Clara Tolson Join your Event Gala Music Festival", time: "9 hr ago", showActions: false },
    { content: "Jennifer Fritz Invite you International Kids Safe", time: "Tue, 5:10 pm", showActions: true },
    { content: "Eric G. Prickett Started following you", time: "Wed, 3:30 pm", showActions: false },
];*/




 function ActionBarTitle() {
  return (
    <div className="action-bar">
<<<<<<< HEAD
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="icons">
          <img
            src="images/cellular-connection.svg"
            alt="Cellular"
            width="17"
            height="11"
          />
          <img
            src="assets/wifi.svg"
            alt="Wifi"
            width="15"
            height="11"
          />
          <img
            src="images/battery.svg"
            alt="Battery"
            width="24"
            height="12"
          />
        </div>
      </div>
=======
     
>>>>>>> pullowlet
      <div className="title-bar">
        <img
          src="images/arrowback-icon.png"
          alt="Back arrow"
          className="icon"
        />
        <span className="title">Notification</span>
        <img
          src="images/moreoption-icon.png"
          alt="More options"
          className="icon"
        />
      </div>
    </div>
  );
}

function NotificationItem({ name, action, time }) {
  return (
    <div className="notification-item">
      <img 
        src= "images/female.png"
        alt="User Avatar" 
        className="avatar"
      />
      <div className="notification-content">
        <div className="notification-header">
          <span className="user-name">{name}</span>
          <span className="action-text">{action}</span>
        </div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
}

function ActionButtons({ hasButtons }) {
  return (
    hasButtons ? (
      <div className="group-container">
        <div className="reject-group">
          <span className="reject-text">Reject</span>
        </div>
        <div className="accept-group">
          <span className="accept-text">Accept</span>
        </div>
      </div>
    ) : null
  );
}

export const NotificationPage = () => {
  const notifications = [
    { name: 'David Silbia', action: 'Invite Jo Malone London’s Mother’s', time: 'Just now', hasButtons: true },
    { name: 'Adnan Safi', action: 'Started following you', time: '5 min ago', hasButtons: false },
    { name: 'Joan Baker', action: 'Invite A virtual Evening of Smooth Jazz', time: '20 min ago', hasButtons: true },
    { name: 'Ronald C. Kinch', action: 'Like your events', time: '1 hr ago', hasButtons: false },
    { name: 'Clara Tolson', action: 'Join your Event Gala Music Festival', time: '9 hr ago', hasButtons: false },
    { name: 'Jennifer Fritz', action: 'Invite you International Kids Safe', time: 'Tue, 5:10 pm', hasButtons: true },
    { name: 'Eric G. Prickett', action: 'Started following you', time: 'Wed, 3:30 pm', hasButtons: false }
  ];
  
  return (
    <div className="app">
      <ActionBarTitle />
      {notifications.map((notification, index) => (
        <div key={index} className="notification-item-container">
          <NotificationItem 
            name={notification.name} 
            action={notification.action} 
            time={notification.time} 
          />
          <ActionButtons hasButtons={notification.hasButtons} />
        </div>
      ))}
    </div>
  );
};

 export default NotificationPage ;

/*>>>>>>> 3c3a971602a2c3523305f49034fa66f3d0ea8d47*/
