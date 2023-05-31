import FormGotejamento from "../FormGotejamento";
import FormEndovenosa from "../FormEndovenosa";
import FormRegra from "../FormRegra";

export default function Forms({tipo}){
        switch (tipo) {
            case "gotejamento":
                return <FormGotejamento/>;
            case "endovenosa":
                return <FormEndovenosa/>;
            case "regra":
                return <FormRegra/>;
            default:
                break;
        }
}