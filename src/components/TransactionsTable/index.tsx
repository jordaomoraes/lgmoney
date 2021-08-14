
import { Container } from './styles'

export function TransactionsTable() {
  return (
  <Container>
    <table>

      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Desenvolimento de Web Site</td>
          <td className="deposito">R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
        <tr>
          <td>Desenvolimento de Web Site</td>
          <td className="retirada">-R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
          <tr>
          <td>Desenvolimento de Web Site</td>
          <td className="retirada">-R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
        <tr>
          <td>Desenvolimento de Web Site</td>
          <td className="retirada">-R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
        <tr>
          <td>Desenvolimento de Web Site</td>
          <td className="deposito">R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
      </tbody>


    </table>
  </Container>
  )
}