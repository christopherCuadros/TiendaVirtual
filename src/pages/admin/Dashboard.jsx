import { Typography } from "@material-tailwind/react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div>
      <Typography as="h1" variant="h1">
        Dashboard
      </Typography>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-md p-3 shadow-md">
          <div className="flex border-b-2 p-5">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
            <Typography as="p" variant="paragraph">
              Ingresos
            </Typography>
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="bg-white rounded-md p-3 shadow-md">
          <div className="flex border-b-2 p-5">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
            <Typography as="p" variant="paragraph">
              Ingresos
            </Typography>
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="bg-white rounded-md p-3 shadow-md">
          <div className="flex border-b-2 p-5">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
            <Typography as="p" variant="paragraph">
              Ingresos
            </Typography>
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="bg-white rounded-md p-3 shadow-md">
          <div className="flex border-b-2 p-5">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
            <Typography as="p" variant="paragraph">
              Ingresos
            </Typography>
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  );
}
