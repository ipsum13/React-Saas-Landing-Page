import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  dialog: {
    zIndex: 1400
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function CookieRulesDialog(props) {
  const { classes, onClose, open, theme } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>Our Cookie Policy</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          Qué son las Cookies
        </Typography>
        <Typography paragraph>
          
          Como es práctica común con casi todos los sitios web profesionales,
          este sitio utiliza cookies, que son archivos pequeños que se
          descargan en su ordenador, para mejorar su experiencia. Esta página
          describe qué información recogen, cómo la usamos y por qué a veces
          necesitamos almacenar estas cookies. También compartiremos cómo puede
          evitar que estas cookies se almacenen, sin embargo, esto puede
          desactivar o &apos;romper&apos; ciertos elementos de la funcionalidad
          del sitio. Para obtener más información general sobre las cookies, consulte el artículo de Wikipedia sobre HTTP Cookies.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Cómo usamos las cookies
        </Typography>
        <Typography paragraph>
          Usamos cookies por una variedad de razones detalladas a continuación.
          Desafortunadamente, en la mayoría de los casos no hay opciones
          estándar de la industria para deshabilitar las cookies sin
          deshabilitar completamente la funcionalidad y las características que
          añaden a este sitio. Se recomienda que deje todas las cookies si no
          está seguro de si necesita o no, ya que pueden ser utilizadas para
          proporcionar un servicio que utiliza.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Deshabilitando cookies
        </Typography>
        <Typography paragraph>
          Puede evitar la configuración de cookies ajustando la configuración de
          su navegador (consulte la Ayuda de su navegador para saber cómo hacer
          esto). Tenga en cuenta que la desactivación de cookies afectará la
          funcionalidad de este y muchos otros sitios web que visita. La
          desactivación de cookies generalmente también desactivará cierta
          funcionalidad y características de este sitio. Por lo tanto, se
          recomienda que no desactive las cookies.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Las cookies que establecemos
        </Typography>
        <Typography paragraph>Cookies relacionadas a la cuenta:</Typography>
        <Typography paragraph>
          Si crea una cuenta con nosotros, usaremos cookies para el manejo del
          proceso de registro y la administración general. Estas cookies
          generalmente se eliminarán cuando cierre sesión, pero en algunos casos
          pueden permanecer después para recordar sus preferencias de sitio
          cuando cierre sesión. Usamos cookies para recordar que aceptó este
          mensaje.
        </Typography>
  
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          Atrás
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
