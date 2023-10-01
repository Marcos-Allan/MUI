import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material'

export const MuiTable = () => {
    return(
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': {border: 0} }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align='center'>{row.email}</TableCell>
                            </TableRow>    
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>    
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Ezri",
    "last_name": "Nucci",
    "email": "enucci0@si.edu",
    "gender": "Male",
    "ip_address": "124.112.43.232"
  }, {
    "id": 2,
    "first_name": "Malory",
    "last_name": "Coltart",
    "email": "mcoltart1@amazonaws.com",
    "gender": "Female",
    "ip_address": "9.109.248.247"
  }, {
    "id": 3,
    "first_name": "Olia",
    "last_name": "Jurzyk",
    "email": "ojurzyk2@symantec.com",
    "gender": "Female",
    "ip_address": "145.101.198.22"
  }, {
    "id": 4,
    "first_name": "Elly",
    "last_name": "Elleyne",
    "email": "eelleyne3@telegraph.co.uk",
    "gender": "Female",
    "ip_address": "184.196.124.29"
  }, {
    "id": 5,
    "first_name": "Herve",
    "last_name": "Simms",
    "email": "hsimms4@sphinn.com",
    "gender": "Male",
    "ip_address": "152.183.43.204"
  }, {
    "id": 6,
    "first_name": "Jillene",
    "last_name": "Ibbitson",
    "email": "jibbitson5@behance.net",
    "gender": "Female",
    "ip_address": "124.139.175.26"
  }, {
    "id": 7,
    "first_name": "Nathanael",
    "last_name": "Forbes",
    "email": "nforbes6@microsoft.com",
    "gender": "Male",
    "ip_address": "30.223.229.220"
  }, {
    "id": 8,
    "first_name": "Hildegarde",
    "last_name": "Muggach",
    "email": "hmuggach7@canalblog.com",
    "gender": "Female",
    "ip_address": "34.141.206.125"
  }, {
    "id": 9,
    "first_name": "Beulah",
    "last_name": "Runsey",
    "email": "brunsey8@liveinternet.ru",
    "gender": "Female",
    "ip_address": "185.220.181.85"
  }, {
    "id": 10,
    "first_name": "Katherine",
    "last_name": "Reihill",
    "email": "kreihill9@cnet.com",
    "gender": "Female",
    "ip_address": "180.41.85.88"
  }]