import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NameEmailPage from './NameEmailPage';
import PhoneAddressPage from './PhoneAddressPage';
import HowYouHeardRemarkPage from './HowYouHeardPage';
import SuccessPage from './SuccessPage';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBghhcARkklxSWv1ks6JGw7M1nRMQlk9Ko",
  authDomain: "remarkform-3d065.firebaseapp.com",
  databaseURL: "https://remarkform-3d065-default-rtdb.firebaseio.com",
  projectId: "remarkform-3d065",
  storageBucket: "remarkform-3d065.appspot.com",
  messagingSenderId: "782468369081",
  appId: "1:782468369081:web:58e96b1d7b863504186968",
  measurementId: "G-WP6RSG6XP2"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (!userId) {
      setUserId(Date.now().toString());
    }
  }, [userId]);

  const handleNameEmailSubmit = async (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    const dbRef = ref(database, `remark/${userId}`);
    await update(dbRef, data);
    console.log('Name and email data submitted to Firebase');
    // navigate('/phone-address');
  };

  const handlePhoneAddressSubmit = async (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    const dbRef = ref(database, `remark/${userId}`);
    await update(dbRef, data);
    console.log('Phone and address data submitted to Firebase');
    // navigate('/how-you-heard');
  };

  const handleHowYouHeardSubmit = async (completeFormData) => {
    setFormData((prevData) => ({ ...prevData, ...completeFormData }));
    const dbRef = ref(database, `remark/${userId}`);
    await update(dbRef, completeFormData);
    console.log('Complete form data submitted to Firebase');
    // navigate('/success');
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<NameEmailPage onNext={handleNameEmailSubmit} />} />
        <Route path="/phone-address" element={<PhoneAddressPage onNext={handlePhoneAddressSubmit} />} />
        <Route path="/how-you-heard" element={<HowYouHeardRemarkPage onNext={handleHowYouHeardSubmit} formData={formData} />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;