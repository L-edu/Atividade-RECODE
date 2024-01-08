import { useState } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

const DeletePacote = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [pacoteId, setPacote] = useState(codigo);
 

  const handleDeletePacote = () => {
  
    axios
      .delete("https://localhost:7271/api/Pacotes/" + pacoteId)
      .then(() => {
        router.push("/pacote");
      })
      .catch((error) => {
        alert("Erro ao excluir pacote:" + error);
      });
  };

  return (

    <div>
    
      <h1 className={style.h1}>Excluir Pacote</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID Pacote:</label>
            </td>
            <td>
              <input
                type="text"
                value={pacoteId}
                onChange={(e) => setPacote(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeletePacote}>Excluir Pacote</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeletePacote;
