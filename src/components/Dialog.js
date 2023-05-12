
import React from "react";

const Dialog = ({ onClose = (f) => f }) => (
    <div class="dialog-container">
        <div class="dialog">
            <h2>Thank you for your star review!</h2>
            <p>We appreciate your feedback and are thrilled to hear that you had a great experience with our 
            product/service.Your feedback is valuable to us as we strive to improve and provide the best possible 
            experience for our customers.Thank you for taking the time to share your thoughts with us, and we look
            forward to serving you again in the future.</p>
        </div>
        <button class="close-dialog-button" onClick={onClose}>Close Dialog</button>
    </div>
    
);

export default Dialog;
