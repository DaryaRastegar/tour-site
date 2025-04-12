import React from "react";
import { useGetUserPeyment } from "../../services/queries";
import { Loading } from "../layout/Loading";
import { formatDateTime } from "../../utils/date";
import { tourNumber } from "../../utils/tourNumber";

function UserPaymentPage() {
  const { data, isPending } = useGetUserPeyment();

  if (isPending) return <Loading />;

  return (
    <div className="w-[96%] lg:w-full mx-auto overflow-x-auto rounded-xl border border-gray-400">
      <table className="w-full bg-gray-50 shadow-md rounded-xl text-right">
        <thead className="bg-gray-100 text-gray-700 rounded-xl text-center">
          <tr>
            <th className="p-3 border-0 text-base font-normal">شماره سفارش</th>
            <th className="p-3 border-0 text-base font-normal hidden lg:block">
              نوع تراکنش
            </th>
            <th className="p-3 border-0 text-base font-normal">مبلغ (تومان)</th>
            <th className="p-3 border-0 text-base font-normal">تاریخ و ساعت</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => (
            <tr key={item.id} className="border-0 hover:bg-gray-50 text-center">
              <td className="p-3 border-0 font-light text-sm">
                {tourNumber(item.id)}
              </td>
              <td className="p-3 border-0 font-light text-sm  hidden lg:block">
                {item.type}
              </td>
              <td className="p-3 border-0 font-light text-sm">
                {item.amount.toLocaleString()} تومان
              </td>
              <td className="p-3 border-0 font-light text-sm">
                {formatDateTime(item.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPaymentPage;
