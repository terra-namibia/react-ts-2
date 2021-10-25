import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../components/types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({title: "ログインしました", status: "success"});
          history.push("/home");
        } else {
          showMessage({title: "ユーザーが見つかりません", status: "error"});
        }
      })
      .catch(() => showMessage({title: "ログインできません", status: "error"}))
      .finally(() => setLoading(false));
  }, [history, showMessage]);

  return { login, loading };
};
