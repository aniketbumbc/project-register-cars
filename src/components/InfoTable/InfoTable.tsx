import React, { useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import { useTable, usePagination } from 'react-table';
import { COLUMNS } from './column';
import './InfoTable.css';

interface InfoTableProps {
  /** model of car */
  model: string;
  /** make of car */
  make: string;
  /** base url */
  url: string;
}

const InfoTable: React.FC<InfoTableProps> = React.memo(
  ({ model, make, url }) => {
    const { data, showData } = useFetch(
      `${url}vehicles?make=${make}&model=${model}`
    );
    const columns = useMemo(() => COLUMNS, []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      gotoPage,
      pageCount,
      state,
      prepareRow,
    } = useTable({ columns, data }, usePagination);

    const { pageIndex } = state;

    return (
      <div className='info-table'>
        {showData && data.length ? (
          <div>
            <div className='tableTitle'>
              <h3> Car Model Information</h3>
            </div>
            <table {...getTableProps()} className='Info-table'>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className='footer'>
              <div className='table-footer'>
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
              </div>
              <div className='table-footer'>
                | Go to Page:
                <input
                  type='number'
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  style={{ width: '50px' }}
                />
              </div>
              <div className='tableButtons'>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {'<<'}
                </button>
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  Next
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {'>>'}
                </button>
              </div>
            </div>
          </div>
        ) : showData ? (
          <h3> No Data Found Please Select Another Model !!</h3>
        ) : null}
      </div>
    );
  }
);

export default InfoTable;
