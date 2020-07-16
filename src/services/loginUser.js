const FAKE_USER = {
  name: "carlos",
  email: "l@gmail.com",
  active: true,
};

function loginUser(email, password) {
  const result = {
    user: {},
    errors: [],
  };

  try {
    result.user = FAKE_USER;
  } catch (e) {
    result.errors = [...result.errors, e.toString()];
  }

  return result;
}
export default loginUser;
