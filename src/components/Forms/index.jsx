import FormGotejamento from "../FormGotejamento";
import FormEndovenosa from "../FormEndovenosa";
import FormRegra from "../FormRegra";
import FormInsulina from "../FormInsulina";
import FormDilucao from "../FormDiluicao";

export default function Forms({tipo}){
        switch (tipo) {
            case "gotejamento":
                return <FormGotejamento/>;
            case "endovenosa":
                return <FormEndovenosa/>;
            case "insulina":
                return <FormInsulina/>;
            case "regra":
                return <FormRegra/>;
            case "diluicao":
                return <FormDilucao/>;
            default:
                break;
        }
}