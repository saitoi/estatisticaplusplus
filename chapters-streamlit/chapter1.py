import streamlit as st

st.write(
    """
<style>
html, body {
    font-size: 18px;
}

p {
    text-indent: 25px;
}

h1 {
    font-weight: 600;
}

ul li {
    padding-left: 0px !important;
}
    """, unsafe_allow_html=True)

st.title('1. Introdução')
st.write('Esse capítulo visa estabelecer conceitos importantes que envolvem a linguagem C, compiladores e programação no geral.')

st.subheader('1.1. Características da Linguagem C')

st.write("""
        <p>
          C é uma <strong>linguagem de programação compilada</strong>, isto é, ao escrevermos o código fonte na própria
          linguagem, no caso em C, um programa chamado compilador reescreve esse código fonte para a linguagem de
          máquina.
          Sendo assim, o compilador tem como entrada um arquivo com código fonte da linguagem e que gera como saída um
          <strong>arquivo objeto</strong>, com <strong>código objeto</strong>, que é ligado à outros arquivos objeto,
          para
          gerar um <strong>arquivo executável</strong>. O arquivo executável é um arquivo que pode ser executado no
          computador alvo. Na próxima seção, serão dados mais detalhes sobre o processo de compilação de um arquivo em
          C.
          Abaixo seguem algumas características importantes da linguagem C:
        </p>
         """, unsafe_allow_html=True)

st.write("""
        <ul>
          <li><strong>Estruturada:</strong> A programação estruturada (sucedida pela programação orientada a objeto) é
            um
            paradigma formado por três componentes:
            <ul>
              <li>Sequência: Uma tarefa é executada logo após a outra;</li>
              <li>Decisão: A tarefa é executada logo após um teste lógico;</li>
              <li>Iteração: A partir de um teste lógico, um trecho de código pode ser repetido finitas vezes.</li>
            </ul>
          </li>
          <li><strong>Imperativa:</strong> Em contraste com a programação imperativa, o paradigma imperativo descreve
            ações/instruções que o programa deverá tomar/executar. Ou seja, linguagens imperativas são programadas com
            uma
            sequência de comandos ordenada pela programador;</li>
          <li><strong>Procedural:</strong> O paradigma procedural permite a linguagem construir procedimentos que podem
            ser compartimentados e reutilizados de forma a tornar partes do códigos mais independentes entre si;</li>
          <li><strong>Padronizada:</strong> A padronização é uma característica que dita a regularidade da linguagem, de
            modo que um mesmo código gere sempre o mesmo resultado, seja ele compilado e executado ou interpretado;</li>
          <li><strong>Fortemente Tipada:</strong> Em C, o tipo das variáveis/funções precisam ser bem definidos e são
            mantidos durante toda a execução do programa. Porém, com ponteiros do tipo <code>
              void</code>, é possível driblar essa questão, sendo possível, mas não aconselhável,
            mudar implicitamente o tipo da variável que ponteiro está apontando.</li>
        </ul>
         """, unsafe_allow_html=True)

st.write("""
        <style>
        .styled-table {
        border-collapse: collapse;
        margin: 15px auto 25px;
        font-size: 0.9em;
        font-family: Arial, sans-serif;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        line-height: 1.3em;
        }
        
        .styled-table tr {
        text-align: left;
        }

        .styled-table th,
        .styled-table td {
        padding: 12px 15px;
        border-right: 1.5px solid rgba(0, 0, 0, 0.1);
        }

        .styled-table tr:nth-of-type(2n) {
        background-color: #f5f5f5;
        }


        .styled-table tr:hover {
        background-color: #f0f0f0;
        }

        .styled-table tr:hover td {
        color: #333; 
        }

        .styled-table tr:hover td:hover {
        background-color: #c4c4c4; 
        transition: 0.25s;
        }

        .styled-table tr:nth-of-type(1):hover {
        background-color: white;
        }

        #tabela {
        font-weight: bold;
        text-align: center;
        margin: 0 auto;
        }
        <style>
         """, unsafe_allow_html=True)

st.write("""
        <table class="styled-table">
          <tr>
            <th>PALAVRA-CHAVE</th>
            <th>TIPO</th>
            <th>BYTES</th>
            <th>INTERVALO</th>
            <th>FORMATO</th>
          </tr>
          <tr>
            <td>char / signed char</td>
            <td>Caracter</td>
            <td>1</td>
            <td>-128 a 127</td>
            <td>%c</td>
          </tr>
          <tr>
            <td>unsigned char</td>
            <td>Caracter sem sinal</td>
            <td>1</td>
            <td>0 a 255</td>
            <td>%c</td>
          </tr>
          <tr>
            <td>short / short int / signed short / signed short int</td>
            <td>Inteiro curto com sinal</td>
            <td>2</td>
            <td>−32768 a 32767</td>
            <td>%hi ou %hd</td>
          </tr>
          <tr>
            <td>unsigned short / unsigned short int</td>
            <td>Inteiro curto sem sinal</td>
            <td>2</td>
            <td>0 a 65535</td>
            <td>%hu</td>
          </tr>
          <tr>
            <td>signed int / signed</td>
            <td>Inteiro com sinal</td>
            <td>2</td>
            <td>-32768 a 32767</td>
            <td>%i ou %d</td>
          </tr>
          <tr>
            <td>unsigned / unsigned int</td>
            <td>Inteiro sem sinal</td>
            <td>2</td>
            <td>0 a 65535</td>
            <td>%u</td>
          </tr>
          <tr>
            <td>long / long int / signed long / signed long int</td>
            <td>Inteiro com sinal</td>
            <td>4</td>
            <td>−2147483648 a 2147483647</td>
            <td>%li ou %ld</td>
          </tr>
          <tr>
            <td>unsigned long / unsigned long int</td>
            <td>Inteiro sem sinal</td>
            <td>4</td>
            <td>0 a 4294967295</td>
            <td>%lu</td>
          </tr>
          <tr>
            <td>long long / signed long long / long long int / signed long long int</td>
            <td>Inteiro muito lingo com sinal</td>
            <td>8</td>
            <td>−2<sup>+63</sup> a 2<sup>+63</sup> −1</td>
            <td>%lli ou %lld</td>
          </tr>
          <tr>
            <td>unsigned long long / unsigned long long int</td>
            <td>Inteiro muito lingo sem sinal</td>
            <td>8</td>
            <td>0 a 2<sup>+64</sup> −1</td>
            <td>%llu</td>
          </tr>
          <tr>
            <td>float</td>
            <td>Ponto flutuante simples</td>
            <td>4</td>
            <td>3.4 X 10<sup>-38</sup> a 3.4 X 10<sup>+38</sup></td>
            <td>%f ou %F</td>
          </tr>
          <tr>
            <td>double</td>
            <td>Ponto flutuante em precisao dupla</td>
            <td>8</td>
            <td>1.7 X 10<sup>-308</sup> a 1.7 X 10<sup>+308</sup></td>
            <td>%lf ou %lF</td>
          </tr>
          <tr>
            <td>long double</td>
            <td>Ponto flutuante em precisão estendida</td>
            <td>16</td>
            <td>3.4 X 10<sup>-4932</sup> a 3.4 X 10<sup>+4932</sup></td>
            <td>%Lf ou %LF</td>
          </tr>
        </table>""", unsafe_allow_html=True)

st.write("""
        <p>
          Vale notar que esses tipos podem variar de máquina para máquina, sendo interessante imprimir os limites dos
          tipos que estão no cabeçalho <b>limits.h</b>. Além disso, as padronizações (como ANSI e ISO, por exemplo) da
          linguagem também podem afetar certos tipos e, consequentemente, o funcionamento do código. Além disso, como C
          é
          muito popular, e por isso muitos compiladores foram construídos, com diferentes características. As próximas
          seções introduzirão o processo de compilação.
        </p>        
""", unsafe_allow_html=True)

st.subheader('1.2. O Que É Um Compilador?')