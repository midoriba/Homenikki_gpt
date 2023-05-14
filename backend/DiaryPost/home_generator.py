from langchain.llms import OpenAI
from langchain import PromptTemplate
from langchain import LLMChain

class HomeGenerator:
    llm = OpenAI(model_name='text-davinci-003')
    template = '''
    あなたは、次の私が書いた日記の内容を褒めてください。回答は140字以内でお願いします。フランクな口調でお願いします。
    {diary_text}
    '''
    prompt = PromptTemplate(
        input_variables=['diary_text'],
        template = template
    )
    chain = LLMChain(llm=llm, prompt=prompt, verbose=True)
    def generate(self, text):
        return self.chain(text)['text']
    
if(__name__ == '__main__'):
    hg = HomeGenerator()
    print(hg.generate(input()))