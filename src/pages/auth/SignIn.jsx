import Layout from "./Layout"
import Title from "../../components/title"
import TextField from "../../components/textField"
import PrimaryBtn from "../../components/primaryBtn"
import LinkTo from "../../components/linkTo"

export default function SignIn() {
  return (
    <Layout>
      <div>
        <Title title="Connexion" />
        <form className="flex flex-col space-y-4">
            <TextField label="Email" type="email" placeholder="Email" />
            <TextField label="Mot de passe" type="password" placeholder="Mot de passe" />
            <PrimaryBtn title="Se connecter" />
          </form>
          <LinkTo text="Pas encore de compte ?" target="/signup" link="S'inscrire" />
      </div>
    </Layout>
  )
}
