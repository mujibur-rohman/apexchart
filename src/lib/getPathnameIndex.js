const getPathName = (pathname, index) => {
  if (index !== undefined) {
    const split = pathname.slice(1).split("/");
    return split[index];
  }
  return pathname;
};

export default getPathName;
