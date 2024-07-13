import React, { useState } from 'react';
import {
    Container, Grid, Paper, Typography, Box, Icon, Select, MenuItem, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Button, Card, Divider, Stack
} from '@mui/material';
import { Wifi, Add, Phone } from '@mui/icons-material';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RouterIcon from '@mui/icons-material/Router';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import { styled } from '@mui/material/styles';

const Root = styled('div')({
    display: 'flex',
    height: '100vh',
});
const Content = styled('div')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    overflow: 'auto',
    width: '100%',
}));
const TableButton = styled(Button)({
    fontSize: '1em', // Reducido de 1.2em a 1em
    fontWeight: 'bold',
    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
    border: 'none',
    borderRadius: '5px',
    '&.promo': {
        backgroundColor: '#ff6600',
        color: 'white',
    },
    '&.regular': {
        backgroundColor: '#fff',
        color: '#ff6600',
        border: '1px solid #ff6600',
    },
    '&.win-pro': {
        backgroundColor: '#ff6600',
        color: 'white',
    }
});
const FullHeightPaper = styled(Paper)({
    width: '100%',
    marginTop: '0px',
    width: '100%',
});
const StyledTableCell = styled(TableCell)({
    padding: '4px 8px', // Ajusta el padding para que las celdas estén más juntas
});
const PlanDetails = ({ planDetails, color }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">
                            <TableButton className="win-pro" style={{ backgroundColor: color }}>
                                BENEFICIOS
                            </TableButton>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {planDetails.map((detail, index) => (
                        <TableRow key={index}>
                            <StyledTableCell align="left">
                                <PersonalVideoIcon style={{ marginRight: '8px' }} />
                                <span style={{ fontSize: '1em' }}>{detail}</span><br />
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const PlanRecordatorio = ({ recordatorios, color }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {recordatorios.map((recordatorio, index) => (
                        <TableRow key={index}>
                            <StyledTableCell align="left">
                                <BookmarkIcon style={{ marginRight: '8px' }} />
                                <span style={{ fontSize: '1em' }}>{recordatorio}</span><br />
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
const PlanFeature = ({ icon, description, subDescription }) => {
    return (
        <TableRow>
            <StyledTableCell align="center">
                <Button
                    style={{
                        fontSize: '0.7em',
                        backgroundColor: '#FF5A00',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        width: '100%', // Aseguramos que el botón se extienda para llenar la celda
                        justifyContent: 'center' // Centramos el contenido del botón
                    }}
                >
                    {icon}
                    <span style={{ fontSize: '1em', fontWeight: 'bold', marginLeft: '8px' }}>{description}</span><br />
                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>{subDescription}</span>
                </Button>
            </StyledTableCell>
        </TableRow>
    );
};

const PlanImage = ({ src, description }) => {
    return (
        <Paper elevation={3} style={{ padding: '5px', marginBottom: '16px' }}>
            <Typography variant="h6">{description}</Typography>
            <img src={src} alt={`Imagen de ${description}`} style={{ width: '100%' }} />
        </Paper>
    );
};

const PriceTable = ({ data }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {data.headers.map((header, index) => (
                        <StyledTableCell key={index} align="center">
                            <PriceButton>{header}</PriceButton>
                        </StyledTableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <StyledTableCell key={cellIndex} align="center">
                                <PriceButton color={cell.color} textColor={cell.textColor}>{cell.value}</PriceButton>
                            </StyledTableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const priceData = {
    headers: ["WIN", "PROMO", "REGULAR"],
    rows: [
        [
            { value: "400 Mbps", color: "#ff6600", textColor: "white" },
            { value: "S/. 138", color: "#2e9fe1", textColor: "white" },
            { value: "S/. 168", color: "white", textColor: "#2e9fe1" }
        ],
        [
            { value: "600 Mbps", color: "#ff6600", textColor: "white" },
            { value: "S/. 148", color: "#2e9fe1", textColor: "white" },
            { value: "S/. 178", color: "white", textColor: "#2e9fe1" }
        ],
        // Más filas pueden ser agregadas aquí
    ]
};


// Componente de la tabla
const Subtask1 = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const getBackgroundColor = (option) => {
        switch (option) {
            case 'opcion1':
                return '#ff6600'; // Color para WINTV BASICO
            case 'opcion2':
                return '#ff6600'; // Color para WINTV PLUS
            case 'opcion3':
                return '#2e9fe1'; // Color para DGO L1MAX
            case 'opcion4':
                return '#2e9fe1'; // Color para DGO BASICO
            case 'opcion5':
                return '#2e9fe1'; // Color para DGO BASICO
            case 'opcion6':
                return '#ff6600'; // Color para DGO BASICO
            case 'opcion7':
                return '#212120'; // Color para DGO BASICO
            case 'opcion8':
                return '#212120'; // Color para DGO BASICO
            case 'opcion9':
                return '#212120'; // Color para DGO L1MAX
            case 'opcion10':
                return '#212120'; // Color para DGO L1MAX
            case 'opcion11':
                return '#212120'; // Color para DGO L1MAX
                case 'opcion12':
                    return '#212120'; // Color para DGO L1MAX
            default:
                return '#321712'; // Color predeterminado
        }
    };

    return (
        <Container>
            {/* Contenedor principal */}
            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '24px' }}>
                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '4.5rem' }}>DÚO WIN</Typography>
                <Typography variant="body1" align="center" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DUPLICA TU VELOCIDAD X6 MESES</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" mt={2} style={{ marginTop: '1px' }}>
                    <Wifi style={{ marginRight: '8px' }} />
                    <Add style={{ marginRight: '8px' }} />
                    <Phone />
                    <Add style={{ marginRight: '8px' }} />
                    <PersonalVideoIcon />
                    <Add style={{ marginRight: '8px' }} />
                    <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>DGO</Typography>
                </Box>
                <Typography align="center" variant="body1" style={{ marginTop: '1px' }}>
                    INTERNET 100% FIBRA + TELEVISIÓN DIGITAL (WIN TV Y DGO) + FONOWIN
                </Typography>
            </Paper>

            {/* Cuadro combinado */}
            <Box mb={4}>
                <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    displayEmpty
                    fullWidth
                    style={{ color: 'white', backgroundColor: getBackgroundColor(selectedOption), padding: '1px', borderRadius: '5px' }}
                >
                    <MenuItem value="" disabled>
                        Selecciona una opción
                    </MenuItem>
                    <MenuItem value="opcion1" style={{ color: 'white', backgroundColor: '#ff6600' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>WIN BASICO</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />

                                    <PersonalVideoIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion2" style={{ color: 'white', backgroundColor: '#ff6600' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>WIN FULL</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <PersonalVideoIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion3" style={{ color: 'white', backgroundColor: '#2e9fe1' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO L1MAX</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />


                                    <Add style={{ marginRight: '8px' }} />
                                    <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO L1MAX</Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion4" style={{ color: 'white', backgroundColor: '#2e9fe1' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO BASICO</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />


                                    <Add style={{ marginRight: '8px' }} />
                                    <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO BASICO</Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion5" style={{ color: 'white', backgroundColor: '#2e9fe1' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO FULL</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO FULL</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion6" style={{ color: 'white', backgroundColor: '#ff6600' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>FONOWIN</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <Phone />
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion7" style={{ color: 'white', backgroundColor: '#212120' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>PLAN GAMER + WIN.tv BASICO</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <PersonalVideoIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion8" style={{ color: 'white', backgroundColor: '#212120' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>PLAN GAMER + WIN.tv PLUS</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <PersonalVideoIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion9" style={{ color: 'white', backgroundColor: '#212120' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>PLAN GAMER + DGO L1MAX</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO L1MAX</Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion10" style={{ color: 'white', backgroundColor: '#212120' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>PLAN GAMER + DGO BASICO</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />


                                    <Add style={{ marginRight: '8px' }} />
                                    <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO BASICO</Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion11" style={{ color: 'white', backgroundColor: '#212120' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>PLAN GAMER + DGO FULL</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />


                                    <Add style={{ marginRight: '8px' }} />
                                    <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>DGO FULL</Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem value="opcion12" style={{ color: 'white', backgroundColor: '#212120' }}>
                        <Grid container spacing={2} style={{ width: '100%' }}>
                            <Grid item xs={12} md={5}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>PLAN GAMER + FONOWIN</Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box display="flex" justifyContent="left" alignItems="left" style={{ marginTop: '1px' }}>
                                    <Wifi style={{ marginRight: '8px' }} />
                                    <Add style={{ marginRight: '8px' }} />
                                    <Phone />
                                </Box>
                            </Grid>
                        </Grid>
                    </MenuItem>


                </Select>
            </Box>

            {/* Mostrar contenido basado en la opción seleccionada */}
            {selectedOption === 'opcion1' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                ----------
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>300 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 104
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 134
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>400 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>800 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 124
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 154
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>1000 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 174
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>WIN TV BASICO</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 40 canales locales e internacionales</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Grabación de 5 hrs de contenido</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Pausa y retrocede en vivo hasta 7 días</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Disfrútalo hasta en 4 dispositivos en simultáneo (hasta 2 tv/winbox + 2 móvil/web)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>800 Mbps opcional un MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">WIN TV BASICO</Typography>
                            <img src="/assets/wintvbasico1.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion2' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
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
                                            <span style={{ fontSize: '0.9em', textDecoration: 'line-through' }}>200 Mbps</span><br />
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>400 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 124
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 124
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '0.9em', textDecoration: 'line-through' }}>300 Mbps</span><br />
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 104
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '0.9em', textDecoration: 'line-through' }}>400 Mbps</span><br />
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>800 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 124
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 154
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 124
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 134
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 164
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>1000 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 154
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 184
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                X2 PRIMEROS MESES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                DEL 3er al 6to mes
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>WIN TV PLUS</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 60 canales locales e internacionales</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Novelas, películas, kids, contenido a la carta y más</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Grabación de 5 hrs de contenido</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Disfrútalo hasta en 6 dispositivos en simultáneo (hasta 4 tv/winbox + 2 móvil/web)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>800 Mbps opcional un MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Por los dos primeros se le hara un descuento al WINTVPLUS</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Del 3er al 6to mes se tiene un precio promocion del internet</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">WIN TV PLUS</Typography>
                            <img src="/assets/wintvplus.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion3' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                WIN<br />
                                                PRO
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo" style={{ backgroundColor: '#2e9fe1' }}>
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                ----------
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>300 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>400 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>800 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 1448
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 158
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 188
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>1000 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 208
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#2e9fe1', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1' }}>D GO L1MAX</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro" style={{ backgroundColor: '#2e9fe1' }}>
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 18 canales en vivo para DGO Plan L1MAX</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 60 canales en vivo para DGO Plan BASICO</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 85 canales en vivo para DGOFull</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>02 Dispositivos en simultáneo (DGO L1MAX y BASICO)</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>04 Dispositivos en simultáneo DGO FULL</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Con DGO podras crear hasta 5 perfiles</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Retroceder la programacion en curso *Aplica para DGO Full. No aplica para canales Premium (Liga 1 Max)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>800 Mbps opcional un MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">D GO L1MAX</Typography>
                            <img src="/assets/dgol1max.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion4' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                WIN<br />
                                                PRO
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo" style={{ backgroundColor: '#2e9fe1' }}>
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                ----------
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>300 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>400 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>800 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 158
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 188
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>1000 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 208
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#2e9fe1', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1' }}>DGO BASICO</Typography>
                        <PlanDetails
                            planDetails={[
                                "Más de 18 canales en vivo para DGO Plan L1MAX",
                                "Más de 60 canales en vivo para DGO Plan BASICO",
                                "Más de 85 canales en vivo para DGO Full",
                                "02 Dispositivos en simultáneo (DGO L1MAX y BASICO)",
                                "04 Dispositivos en simultáneo DGO FULL",
                                "Con DGO podrás crear hasta 5 perfiles",
                                "Retroceder la programación en curso *Aplica para DGO Full. No aplica para canales Premium (Liga 1 Max)"
                            ]}
                            color="#2e9fe1"
                        />
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <PlanRecordatorio
                            recordatorios={[
                                "800 Mbps opcional un MESH",
                                "600 Mbps opcional 2 MESH",
                                "1000 Mbps opcional 2 MESH"
                            ]}
                            color="#2e9fe1"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PlanImage src="/assets/dgobasico.png" description="DGO BASICO" />
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <PlanFeature
                                        icon={<SettingsRemoteIcon />}
                                        description="Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente."
                                        subDescription="Sujeto a evaluación crediticia"
                                    />
                                    <PlanFeature
                                        icon={<RouterIcon />}
                                        description="Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)"
                                    />
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion5' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                WIN<br />
                                                PRO
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo" style={{ backgroundColor: '#2e9fe1' }}>
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                ----------
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 170
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>300 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 160
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 190
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>400 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>800 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 170
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 200
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 180
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 210
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>1000 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 200
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 230
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#2e9fe1', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1' }}>DGO FULL</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro" style={{ backgroundColor: '#2e9fe1' }}>
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 18 canales en vivo para DGO Plan L1MAX</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 60 canales en vivo para DGO Plan BASICO</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 85 canales en vivo para DGOFull</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>02 Dispositivos en simultáneo (DGO L1MAX y BASICO)</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>04 Dispositivos en simultáneo DGO FULL</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Con DGO podras crear hasta 5 perfiles</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Retroceder la programacion en curso *Aplica para DGO Full. No aplica para canales Premium (Liga 1 Max)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>800 Mbps opcional un MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">PARRILLA - DGO FULL
                            </Typography>
                            <img src="/assets/dgoFULL.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion6' && (
                <Grid container spacing={2} style={{ width: '100%' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                ----------
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 109
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>300 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 99
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 129
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.0em', textDecoration: 'line-through' }}>400 Mbps</span><br />
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>800 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 109
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 139
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 119
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 149
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>1000 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 139
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 169
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>800 Mbps opcional un MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                        <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Solicita la App FONOWIN en la post venta al
                                                        707-3000 Opción 2, una vez se encuentre
                                                        activo tu servicio de telefonía fija. </span><br />


                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>

                </Grid>

            )}
            {selectedOption === 'opcion7' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                PLAN<br />
                                                GAMER
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
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>350 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 174
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>WIN TV BASICO</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 40 canales locales e internacionales</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Grabación de 5 hrs de contenido</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Pausa y retrocede en vivo hasta 7 días</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Disfrútalo hasta en 4 dispositivos en simultáneo (hasta 2 tv/winbox + 2 móvil/web)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>350 Mbps opcional un MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">WIN TV BASICO</Typography>
                            <img src="/assets/wintvbasico1.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion8' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                PLAN<br />
                                                GAMER
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo">
                                                PRECIO <br />PROMO
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
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>350 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 114
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 124
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 154
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '0.9em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 144
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 154
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 184
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                X2 PRIMEROS MESES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                DEL 3er al 6to mes
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>WIN TV PLUS</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 60 canales locales e internacionales</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Novelas, películas, kids, contenido a la carta y más</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Grabación de 5 hrs de contenido</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Disfrútalo hasta en 6 dispositivos en simultáneo (hasta 4 tv/winbox + 2 móvil/web)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Por los dos primeros se le hara un descuento al WINTVPLUS</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Del 3er al 6to mes se tiene un precio promocion del internet</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">WIN TV PLUS</Typography>
                            <img src="/assets/wintvplus.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Precio del cableado Mesh: S/ 55 c/u</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion9' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                PLAN<br />
                                                GAMER
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo" style={{ backgroundColor: '#2e9fe1' }}>
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
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>350 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 208
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#2e9fe1', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1' }}>D GO L1MAX</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro" style={{ backgroundColor: '#2e9fe1' }}>
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 18 canales en vivo para DGO Plan L1MAX</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 60 canales en vivo para DGO Plan BASICO</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 85 canales en vivo para DGOFull</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>02 Dispositivos en simultáneo (DGO L1MAX y BASICO)</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>04 Dispositivos en simultáneo DGO FULL</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Con DGO podras crear hasta 5 perfiles</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Retroceder la programacion en curso *Aplica para DGO Full. No aplica para canales Premium (Liga 1 Max)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>350 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">D GO L1MAX</Typography>
                            <img src="/assets/dgol1max.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>precio del cableado Mesh:
                                                        S/. 55 c/u</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion10' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                PLAN<br />
                                                GAMER
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo" style={{ backgroundColor: '#2e9fe1' }}>
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
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>350 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 178
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 208
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#2e9fe1', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1' }}>DGO BASICO</Typography>
                        <PlanDetails
                            planDetails={[
                                "Más de 18 canales en vivo para DGO Plan L1MAX",
                                "Más de 60 canales en vivo para DGO Plan BASICO",
                                "Más de 85 canales en vivo para DGO Full",
                                "02 Dispositivos en simultáneo (DGO L1MAX y BASICO)",
                                "04 Dispositivos en simultáneo DGO FULL",
                                "Con DGO podrás crear hasta 5 perfiles",
                                "Retroceder la programación en curso *Aplica para DGO Full. No aplica para canales Premium (Liga 1 Max)"
                            ]}
                            color="#2e9fe1"
                        />
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <PlanRecordatorio
                            recordatorios={[
                                "800 Mbps opcional un MESH",
                                "600 Mbps opcional 2 MESH",
                                "1000 Mbps opcional 2 MESH"
                            ]}
                            color="#2e9fe1"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PlanImage src="/assets/dgobasico.png" description="DGO BASICO" />
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <PlanFeature
                                        icon={<SettingsRemoteIcon />}
                                        description="Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente."
                                        subDescription="Sujeto a evaluación crediticia"
                                    />
                                    <PlanFeature
                                        icon={<RouterIcon />}
                                        description="Precio del cableado Mesh:
S/ 55 c/u
"
                                    />
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion11' && (
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro">
                                                PLAN<br />
                                                GAMER
                                            </TableButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <TableButton className="promo" style={{ backgroundColor: '#2e9fe1' }}>
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
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>350 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 170
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 200
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#2e9fe1',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 200
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#2e9fe1',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 230
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                NUEVOS PLANES
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#321712',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                SOLO POR 6 MESES
                                            </Button>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#2e9fe1', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1' }}>DGO FULL</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <TableButton className="win-pro" style={{ backgroundColor: '#2e9fe1' }}>
                                                BENEFICIOS
                                            </TableButton>
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 18 canales en vivo para DGO Plan L1MAX</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 60 canales en vivo para DGO Plan BASICO</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Más de 85 canales en vivo para DGOFull</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>02 Dispositivos en simultáneo (DGO L1MAX y BASICO)</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>04 Dispositivos en simultáneo DGO FULL</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Con DGO podras crear hasta 5 perfiles</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <PersonalVideoIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>Retroceder la programacion en curso *Aplica para DGO Full. No aplica para canales Premium (Liga 1 Max)</span><br />
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#2e9fe1', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                   
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>1000 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">PARRILLA - DGO FULL
                            </Typography>
                            <img src="/assets/dgoFULL.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                        </Paper>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente. </span><br />
                                                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Sujeto a evaluación crediticia</span>

                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Precio del cableado Mesh:
S/ 55 c/u
</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>

                    </Grid>
                </Grid>

            )}
            {selectedOption === 'opcion12' && (
                <Grid container spacing={2} style={{ width: '100%' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712' }}>Tabla de precios</Typography>
                        <TableContainer component={Paper}>
                            <Table>
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
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>350 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 109
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 139
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <span style={{ fontSize: '1.2em', color: '#ff6600', fontWeight: 'bold' }}>600 Mbps</span><br />
                                            <span style={{ fontSize: '0.8em' }}>DE VELOCIDAD</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#ff6600',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 139
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '1em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#fff',
                                                    color: '#ff6600',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: '1px solid #ff6600',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                S/. 169
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>

                                </TableBody>

                            </Table>
                            <Paper style={{ backgroundColor: '#FF5A00', color: 'white', padding: '16px', marginBottom: '10px', marginTop: '10px', borderRadius: '50px' }}>
                                <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>INSTALACIÓN GRATIS
                                </Typography>
                            </Paper>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#321712', marginTop: '10px' }}>RECORDATORIO</Typography>
                        <TableContainer component={Paper}>
                            <Table>

                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>350 Mbps opcional  MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="left">
                                            <BookmarkIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em' }}>600 Mbps opcional 2 MESH</span><br />
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                        <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <SettingsRemoteIcon style={{ marginRight: '8px' }} />
                                                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
                                                        Solicita la App FONOWIN en la post venta al
                                                        707-3000 Opción 2, una vez se encuentre
                                                        activo tu servicio de telefonía fija. </span><br />


                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    fontSize: '0.7em', // Reducido de 1.2em a 1em
                                                    backgroundColor: '#FF5A00',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <StyledTableCell align="center">
                                                    <RouterIcon style={{ marginRight: '8px' }} />  <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Precio del cableado Mesh:
S/ 55 c/u
</span><br />
                                                </StyledTableCell>
                                            </Button>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </Grid>

                </Grid>

            )}
        </Container>
    );
};

export default Subtask1;
