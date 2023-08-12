import Layout from "./Layout"
import Title from "../components/title"
import TextField from "../components/textField"
import PrimaryBtn from "../components/primaryBtn"
import LinkTo from "../components/linkTo"


export default function SignUp() {
  return (
    <Layout>
      <div>
        <Title title="Inscription" />
        <form className="">
          <div className="flex space-x-4"> 
            <TextField label="Nom" type="text" placeholder="Nom" />
            <TextField label="Prénom" type="text" placeholder="Prénom" />
          </div>
          <TextField label="Email" type="email" placeholder="Email" />
          <TextField label="Mot de passe" type="password" placeholder="Mot de passe" />
          <TextField label="Confirmer le mot de passe" type="password" placeholder="Confirmer le mot de passe" />
          <PrimaryBtn title="S'inscrire" />
        </form>
       <LinkTo text="Déjà un compte ?" target="/signin" link="Se connecter" />
      </div>
    </Layout>
  )
}
