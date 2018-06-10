import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(data => (
  <div>
    {console.log(data)}
    <h1>Home</h1>
  </div>
));
