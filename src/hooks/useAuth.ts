import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../components/types/api/user";
import { useLoginUser } from "../providers/LoginUserProvider";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data)
          showMessage({title: "ログインしました", status: "success"});
          history.push("/home");
        } else {
          showMessage({title: "ユーザーが見つかりません", status: "error"});
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({title: "ログインできません", status: "error"})
        setLoading(false);
      })
  }, [history, showMessage, setLoginUser]);

  return { login, loading };
};
