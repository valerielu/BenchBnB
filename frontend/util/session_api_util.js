export const signup = (credentials, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/users",
    dataType: "json",
    data: {user: credentials},
    success,
    error
  });
};
export const login = (credentials, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/session",
    dataType: "json",
    data: {user: credentials},
    success,
    error
  });
};
export const logout = (success, error) => {
  $.ajax({
    method: "DELETE",
    url: "api/session",
    dataType: "json",
    success,
    error
  });
};
