import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useUserUuid() {
  const [userUuid, setUserUuid] = useState(null);

  useEffect(() => {
    const uuid = localStorage.getItem('widget_user_uuid');

    if (uuid) {
      setUserUuid(uuid);
    } else {
      // generate uuid
      const newUuid = uuidv4();
      // save uuid to local storage
      localStorage.setItem('widget_user_uuid', newUuid);
      setUserUuid(newUuid);
    }
  }, []);

  return userUuid;
}
