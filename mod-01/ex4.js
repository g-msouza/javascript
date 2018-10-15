function experiencia(anos) {
    if (anos <= 1) {
        return "De 0-1 ano: Iniciante";
    }
    else if (anos <= 3) {
        return "De 1-3 anos: Intermediário";
    }
    else if (anos <= 6) {
        return "De 3-6 anos: Avançado";
    }
    else {
        return "De 7 acima: Jedi Master";
    }
}

var anosExperiencia = 7;
experiencia(anosExperiencia);