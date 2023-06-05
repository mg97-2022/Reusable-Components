import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

const CustomTable = ({ data, columns, tbCell, state }) => {
  const table = useReactTable({
    data,
    state, // used if the table has search bar to filter
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="max-w-full w-full mx-auto rounded-t-[8px] overflow-y-hidden">
      <table
        className="!w-full"
        {...{
          style: {
            width: table.getCenterTotalSize(),
          },
        }}
      >
        <thead className="bg-secondary h-[46px] border border-secondary text-primary">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="font-medium text-sm md:text-base first-letter:capitalize"
                  key={header.id}
                  // style={{
                  //   width: header.getSize(),
                  // }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border border-[#D0D0D0] border-t-0">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className={`${tbCell} text-sm md:text-base text-center text-[#9C9C9C] border border-[#D0D0D0] border-t-0  h-[92px] px-1`}
                  key={cell.id}
                  // style={{
                  //   width: cell.column.getSize(),
                  // }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
