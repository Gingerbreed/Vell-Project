
using System;
using System.Threading;
using Wisej.Web;

namespace Wisej_Frontend
{
    public partial class Window1 : Form
    {
        public Window1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Application.StartTask(() =>
            {
                while (this.progressBar1.Value < 100)
                {
                    this.progressBar1.Value += 10;
                    Thread.Sleep(1000);
                    Application.Update(this);
                }
            });
        }
    }
}
