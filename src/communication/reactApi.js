import axios from "axios";

export default axios.create({
    baseURL:
        "https://calvinl345-findnearbyplaces.herokuapp.com/api/restaurants",
});
