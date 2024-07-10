import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';

// Datos de ejemplo
const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Root = styled('div')({
  display: 'flex',
  height: '100vh',
});

const Content = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflow: 'auto',
}));

const FullHeightPaper = styled(Paper)({
  width: '100%',
  marginTop: '20px',
});

const TableButton = styled(Button)({
  fontSize: '1.2em',
  fontWeight: 'bold',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  '&.promo': {
    backgroundColor: '#2e9fe1',
    color: 'white',
  },
  '&.regular': {
    backgroundColor: '#fff',
    color: '#2e9fe1',
    border: '1px solid #ff6600',
  },
  '&.win-pro': {
    backgroundColor: '#ff6600',
    color: 'white',
  }
});

const StyledTableCell = styled(TableCell)({
  padding: '4px 8px', // Ajusta el padding para que las celdas estén más juntas
});

const Subtask2 = () => {
  return (
    <Root>
      <Content>
        <FullHeightPaper sx={{ backgroundColor: 'black', color: 'white', padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            TRIO WIN
          </Typography>
          <div>
            <Button style={{ color: 'white' }}>Internet</Button>
            <Button style={{ color: 'white' }}>+</Button>
            <Button style={{ color: 'white' }}>Celular</Button>
          </div>
          <Typography variant="h6" component="p">
            INTERNET 100% FIBRA + TELEVISIÓN DIGITAL (DGO) + FONOWIN
          </Typography>
        </FullHeightPaper>

        <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Tabla de Precios
            </Typography>
            <TableContainer component={FullHeightPaper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      <TableButton className="win-pro">
                        WIN<br />
                        PRO
                      </TableButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <TableButton className="promo">
                        PRECIO <br />PROMO
                      </TableButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <TableButton className="regular">
                        PRECIO <br />REGULAR
                      </TableButton>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell align="center">
                      <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>200 Mbps</span><br />
                      <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>400 Mbps</span><br />
                      <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        style={{
                          fontSize: '1.2em',
                          backgroundColor: '#2e9fe1',
                          color: 'white',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      >
                        -----------
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        style={{
                          fontSize: '1.2em',
                          backgroundColor: '#fff',
                          color: '#2e9fe1',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          border: '1px solid #ff6600',
                          borderRadius: '5px'
                        }}
                      >
                        S/. 148
                      </Button>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">
                      <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>200 Mbps</span><br />
                      <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>400 Mbps</span><br />
                      <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        style={{
                          fontSize: '1.2em',
                          backgroundColor: '#2e9fe1',
                          color: 'white',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      >
                        S/. 138
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        style={{
                          fontSize: '1.2em',
                          backgroundColor: '#fff',
                          color: '#2e9fe1',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          border: '1px solid #ff6600',
                          borderRadius: '5px'
                        }}
                      >
                        S/. 168
                      </Button>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">
                      <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>200 Mbps</span><br />
                      <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>400 Mbps</span><br />
                      <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        style={{
                          fontSize: '1.2em',
                          backgroundColor: '#2e9fe1',
                          color: 'white',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      >
                        S/. 148
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        style={{
                          fontSize: '1.2em',
                          backgroundColor: '#fff',
                          color: '#2e9fe1',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          border: '1px solid #ff6600',
                          borderRadius: '5px'
                        }}
                      >
                        S/. 178
                      </Button>
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <TableContainer component={FullHeightPaper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      <TableButton className="win-pro">
                        WIN<br />
                        PRO
                      </TableButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <TableButton className="promo">
                        PRECIO PROMO
                      </TableButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <TableButton className="regular">
                        PRECIO REGULAR
                      </TableButton>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.calories}</StyledTableCell>
                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                      <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                      <StyledTableCell align="center">{row.protein}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
         
        </Grid>
      </Content>
    </Root>
  );
};

export default Subtask2;
