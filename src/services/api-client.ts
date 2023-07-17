import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2747cbb7b78f4b328938d494193e97f2",
  },
});
