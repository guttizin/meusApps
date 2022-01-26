import pandas as pd
import plotly.express as px

tabela_teste = pd.read_excel('marica.xlsx', sheet_name='BDI_20211207', dtype={'Distrito': str,}, usecols='B:E,G,N,AP,AS')
# , sheet_name='BDI_20211207'

# df = px.data.tips()
# tabela_teste['Distrito'] = tabela_teste['Distrito'].astype(str)
tabela_teste = tabela_teste.dropna(how="any", subset=['j23_Valor M² do Terreno', 'j34_Setor'])
# # dados_y = tabela_teste['j23_Valor M² do Terreno']

fig = px.scatter(tabela_teste, hover_data=['j34_Setor'], x='j34_Setor', y='j23_Valor M² do Terreno', color='Distrito', title='Histograma', labels={'x': 'Setor', 'y': 'j23_Valor M² do Terreno'} , template='plotly_dark', color_discrete_map={"1":"red", "2":"green", "3":"blue", "4":"goldenrod", "5":"magenta"}, facet_row='j34_Setor', orientation='h')
#  color_discrete_sequence=['#00bcd4'] , color=tabela_teste['pais']
fig.show()

# print(tabela_teste)