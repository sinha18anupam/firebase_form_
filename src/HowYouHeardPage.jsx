import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HowYouHeardRemarkPage({ onNext, formData }) {
  const [howYouHeard, setHowYouHeard] = useState('');
  const [remark, setRemark] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ ...formData, howYouHeard, remark }); // Pass all previous form data along with current page data
    navigate('/success'); // Navigate to success page after form submission
  };

  return (
    <div>
      <h2>Page 3: How You Heard About Us and Remark</h2>
      <form onSubmit={handleSubmit}>
        {/* How You Heard About Us select input */}
        <label>How You Heard About Us:</label>
        <select value={howYouHeard} onChange={(e) => setHowYouHeard(e.target.value)}>
          <option value="">Select an option</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Social Media">Social Media</option>
          <option value="Other">Other</option>
        </select>
        {/* Remark textarea */}
        <label>Remark:</label>
        <textarea value={remark} onChange={(e) => setRemark(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HowYouHeardRemarkPage;
