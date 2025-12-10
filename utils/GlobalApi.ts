const backendUrlStartingPoint = `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:7500/api`;
interface apiFetchAllProductsProps {
  skip?: number;
  limit?: number;
  queryExcludeString?: string;
}

// CREATE APIS:
// User Signup
export async function apiSignup(bodyData: any) {
  try {
    const res = await fetch(backendUrlStartingPoint + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(bodyData)
    }).then((res: any) => res.json());

    console.log("response data:", res);
    return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}
// Add Cart Item
export async function apiAddCartItem({
  product,
  quantity
}: {
  product: string;
  quantity: number;
}) {
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }
    const response = await fetch(`${backendUrlStartingPoint}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      },
      body: JSON.stringify({
        product,
        quantity
      }),
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // console.log("response");
    const data = await response.json();
    console.log(data);
    return data;
    // setAllProducts([...data.data]);
  } catch (error) {
    console.log("Fetch error :", error);
  }
}

// READ APIS :
// Login User
export async function apiLoginUser(bodyData: any) {
  try {
    const res = await fetch(`${backendUrlStartingPoint}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(bodyData)
    }).then((res: any) => res.json());
    console.log("response data:", res);
    return res;
    // if (res.success == true) {
    //   localStorage.setItem("krist-shopping-website-token", res.token);
    //   console.log(res.message);
    // }
    // if (res.success == false) {
    //   console.log(res.message);
    // }
    // return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

export async function apiAddAddress(bodyData: any) {
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }

    const res = await fetch(`${backendUrlStartingPoint}/auth/user/address/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      },
      credentials: "include",
      body: JSON.stringify(bodyData)
    }).then((res: any) => res.json());
    console.log("response data:", res);
    return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

export async function apiDeleteAddress(bodyData: { addressId: string }) {
  console.log("apiDeleteAddress", bodyData);
  console.log("apiDeleteAddress", bodyData.addressId);
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }
    const res = await fetch(`${backendUrlStartingPoint}/auth/user/address/delete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken
        },
        credentials: "include",
        body: JSON.stringify(bodyData)
      }
    ).then((res: any) => res.json());
    console.log("response data:", res);
    return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

export async function apiUserInfo() {
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    console.log("accessTOken", accessToken);
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }
    const res = await fetch(`${backendUrlStartingPoint}/auth/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      },
      credentials: "include"
    }).then((res: any) => res.json());
    console.log("response data:", res);
    return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

export async function apiUpdateAllUserInfo(bodyData: any) {
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    console.log("accessTOken", accessToken);
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }

    const res = await fetch(`${backendUrlStartingPoint}/auth/user/update/allInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken
        },
        credentials: "include",
        body: JSON.stringify(bodyData)
      }
    ).then((res: any) => res.json());
    console.log("response data:", res);
    return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

export async function apiUpdateUserProfilePicture(fileData: any) {
  console.log("filedata", fileData);

  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    console.log("accessTOken", accessToken);
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }

    const res = await fetch(`${backendUrlStartingPoint}/auth/user/update/profilePicture`,
      {
        method: "POST",
        headers: {
          Authorization: accessToken
        },
        credentials: "include",
        body: (() => {
          const formData = new FormData();
          formData.append("imageFile", fileData.file);
          // for (const [key, value] of formData.entries()) {
          //   console.log("key-value: ", key, value);
          // }
          return formData;
        })()
      }
    ).then((res: any) => res.json());
    console.log("response data:", res);
    return res;
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

// Fetch All Products
export async function apiFetchAllProducts({
  skip = 0,
  limit = 0,
  queryExcludeString = ""
}: apiFetchAllProductsProps) {
  try {
    console.log("queryExcludeString", queryExcludeString);
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }
    const response = await fetch(
      `${backendUrlStartingPoint}/products/getAllProducts?exclude=${queryExcludeString}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken
        },
        body: JSON.stringify({
          skip: skip,
          limit: limit
        }),
        credentials: "include"
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // console.log("response");
    const data = await response.json();
    // console.log(data);
    return data;
    // setAllProducts([...data.data]);
  } catch (error) {
    console.log("Fetch error :", error);
  }
}
// Fetch Single Product
export async function apiFetchProduct({
  productName
}: {
  productName: string;
}) {
  try {
    const response = await fetch(`${backendUrlStartingPoint}/products/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productName
      }),
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // console.log("response");
    const data = await response.json();
    // console.log(data);
    return data;
    // setAllProducts([...data.data]);
  } catch (error) {
    console.log("Fetch error :", error);
  }
}
// Fetch Cart + All Cart Items
export async function apiFetchCart() {
  // return null;
  const accessToken = localStorage.getItem("krist-shopping-website-token");
  if (!accessToken) {
    throw new Error("Relogin and try again");
  }
  try {
    const response = await fetch(`${backendUrlStartingPoint}/cart/getCart`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error :", error);
  }
}

// DELETE APIS :
// Delete Cart Item
export async function apiDeleteCartItem(cartItemId: string) {
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }
    const response = await fetch(
      `${backendUrlStartingPoint}/cart/deleteCartItem`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken
        },
        credentials: "include",
        body: JSON.stringify({
          cartItemId: cartItemId
        })
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error :", error);
  }
}

export async function apiLogout() {
  const res = fetch(`${backendUrlStartingPoint}/auth/logout`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });
  return res;
}

export async function apiAddOrder(order: any) {
  const accessToken = localStorage.getItem("krist-shopping-website-token");
  if (!accessToken) {
    throw new Error("Relogin and try again");
  }
  const res = await fetch(`${backendUrlStartingPoint}/order/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    },
    credentials: "include",
    body: JSON.stringify({
      ...order
    })
  });
  return res.json();
}

export async function apiDeleteOrder(orderId: string, cartItemId: string) {
  const accessToken = localStorage.getItem("krist-shopping-website-token");
  if (!accessToken) {
    throw new Error("Relogin and try again");
  }
  const res = await fetch(`${backendUrlStartingPoint}/order/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    },
    credentials: "include",
    body: JSON.stringify({
      orderId,
      cartItemId
    })
  });
  return res.json();
}

export async function apiFetchOrders() {
  try {
    const accessToken = localStorage.getItem("krist-shopping-website-token");
    if (!accessToken) {
      throw new Error("Relogin and try again");
    }
    const res = await fetch(`${backendUrlStartingPoint}/order/allOrders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      },
      credentials: "include"
    });
    return res.json();
  } catch (err) {
    console.error("Something went wrong", err);
  }
}
