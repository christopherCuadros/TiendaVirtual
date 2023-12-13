import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const TableHead = ({ headerTitle }) => {
  return (
    <thead>
      <tr>
        {headerTitle.map((head) => (
          <th
            key={head}
            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              {head}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  headerTitle: PropTypes.array,
};

export default TableHead;
