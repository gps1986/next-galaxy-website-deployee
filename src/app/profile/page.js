// pages/profile.js
"use client"

// pages/profile.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profile');

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        router('/login');
      }
    };

    fetchProfile();
  }, [router]);

  return (
    <div>
      <h1>User Profile</h1>
      {user && <p>Email: {user.email}</p>}
    </div>
  );
}
