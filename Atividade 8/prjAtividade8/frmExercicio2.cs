using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.VisualBasic;

namespace prjAtividade8
{
    public partial class frmExercicio2 : Form
    {
        public frmExercicio2()
        {
            InitializeComponent();
        }

        private void btnNumeros_Click(object sender, EventArgs e)
        {
            int[] vetor = new int[20];

            string auxiliar = "";


            for (int i = 0; i < vetor.Length; i++)
            {
                auxiliar = Interaction.InputBox("Entrar com o dado da posição:" + (i + 1).ToString(),
                "Entrada de Dados");

                if (!int.TryParse(auxiliar, out vetor[i]))
                {
                    MessageBox.Show("Valor inválido");
                    i--;
                }
            }
            auxiliar = "";

            Array.Reverse(vetor);

            for (int i = 0; i < vetor.Length; i++)
            {
                auxiliar += vetor[i] + "\n";
            }

            MessageBox.Show(auxiliar);
        }
    }
}
