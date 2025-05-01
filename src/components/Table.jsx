
export default function Table({ headers, data }) {
    return (
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th scope="col" class="px-6 py-3">
                  {header.label}
                </th>
              ))}
              <th scope="col" class="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr class="bg-white border-b  border-gray-200">
                {headers.map((header) => (
                  <td class="px-6 py-4">{item[header.key]}</td>
                ))}
                <td class="px-6 py-4 flex gap-2">
                  <span>Excluir</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }