import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Grid,
    Paper,
    Box,
    Icon,
    Divider,
    Chip,
    Card,
    Stack,
    Container,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Wifi, Add, Phone } from '@mui/icons-material';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BookmarkIcon from '@mui/icons-material/Bookmark';


// Definición de los componentes del acordeón
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    width: '100%',  // Ajuste para que el acordeón ocupe todo el ancho disponible
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));
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

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    width: '100%',  // Asegura que ocupe todo el ancho disponible
    display: 'block',  // Asegura que el contenido se muestre en bloque
}));
const TableButton = styled(Button)({
    fontSize: '1em', // Reducido de 1.2em a 1em
    fontWeight: 'bold',
    padding: '5px 10px', // Reducido de 10px 20px a 5px 10px
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
const FullHeightPaper = styled(Paper)({
    width: '100%',
    marginTop: '0px',
    width: '100%',
});
const StyledTableCell = styled(TableCell)({
    padding: '4px 8px', // Ajusta el padding para que las celdas estén más juntas
});

// Componente de la tabla
const Subtask3 = () => {
    return (
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4} >
                <Typography variant="h4" align="center" gutterBottom>
                    Tabla de Precios
                </Typography>
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
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4} >
                <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                            WIN TV BÁSICO
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            <PersonalVideoIcon style={{ marginRight: '8px' }} />
                            </Typography>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ✓ Más de 40 canales locales e internacionales
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ✓ Grabación de 5 hrs de contenido
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ✓ Pausa y retrocede en vivo hasta 7 días
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ✓ Disfrútalo hasta en 4 dispositivos en simultáneo (hasta 2 tv/winbox + 2 móvil/web)
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                </Card>
                <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                            RECORDATORIO
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            <BookmarkIcon style={{ marginRight: '8px' }} />
                            </Typography>
                        </Stack>
                      
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ★ 800 Mbps opcional un MESH
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ★ 600 Mbps opcional 2 MESH
                        </Typography>
                        <Stack direction="row" spacing={1}>

                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ★ 1000 Mbps opcional 2 MESH
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        ★ El Precio promoción es solo por 6 meses
                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                    <Typography variant="h6">WIN TV PLUS</Typography>
                    <img src="/assets/wintvplus.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
                </Paper>
                <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div"align="center">
                            INSTALACIÓN GRATIS
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            </Typography>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        Llévate 1 WINBOX a S/ 15 mensuales Máx. 2 unidades por cliente Sujeto a evaluación crediticia                         </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                        Solicita el cableado de 2 Mesh GRATIS (solo para el plan de 1000 Mbps)                        </Typography>
                        <Stack direction="row" spacing={1}>
                        </Stack>
                    </Box>
                  
                </Card>
            </Grid>
        </Grid>
    );
};

// Componente principal con el acordeón y la tabla integrada
const CustomizedAccordions = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Root>
            <Content>
                <Container maxWidth={false} >
                    {/* Contenedor principal */}
                    <FullHeightPaper sx={{ backgroundColor: 'black', color: 'white', padding: '40px', marginBottom: '16px' }}>
                        <Typography variant="h4" component="h1">TRIO WIN</Typography>
                        <Box display="flex" alignItems="center" mt={2}>
                            <Wifi style={{ marginRight: '8px' }} />
                            <Add style={{ marginRight: '8px' }} />
                            <Phone />
                        </Box>
                        <Typography variant="body1" style={{ marginTop: '16px' }}>
                            INTERNET 100% FIBRA + TELEVISIÓN DIGITAL (DGO) + FONOWIN
                        </Typography>
                    </FullHeightPaper>
                    <Container maxWidth={false}>
                        <Container maxWidth={false} style={{ width: '100%' }}> {/* Ajuste para que el contenedor ocupe todo el ancho */}
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', }}>
                                <div style={{ width: '100%', maxWidth: '10000px' }}> {/* Ajusta el maxWidth según sea necesario */}
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Plan WIN PRO</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Subtask3 />
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                            <Typography>Collapsible Group Item #2</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography>Collapsible Group Item #3</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </Container>
                    </Container>
                </Container>
            </Content>
        </Root>
    );
};

export default CustomizedAccordions;
