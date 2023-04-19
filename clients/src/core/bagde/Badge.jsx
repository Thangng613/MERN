const Badge = ({ status }) => {
  const data =
    status === "TO LEARN" ? (
      <span className="text-xs p-2 font-bold bg-red-500 text-white rounded">
        {status}
      </span>
    ) : status === "LEARNING" ? (
      <span className="text-xs p-2 font-bold bg-blue-500 text-white rounded ">
        {status}
      </span>
    ) : (
      <span className="text-xs p-2  rounded font-bold bg-green-500 text-white ">
        {status}
      </span>
    );

  return <div>{data}</div>;
};

export default Badge;
