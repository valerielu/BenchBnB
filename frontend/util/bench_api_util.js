// import $ from "jquery";

export const fetchBenches = (filter, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data: filter,
    dataType: "json",
    success,
    error: () => console.log("error in fetchBenches")
  });
};

export const fetchBench = (benchId, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/benches/${benchId}`,
    dataType: "json",
    success,
    error: () => console.log("error in fetchBench")
  });
};

export const createBench = (benchData, success, error) => {
  $.ajax({
    method: "POST",
    url: `/api/benches/`,
    data: {bench: benchData},
    dataType: "json",
    success,
    error: () => console.log("error in createBench")
  });
};
