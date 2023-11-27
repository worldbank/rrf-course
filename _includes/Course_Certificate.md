In order to successfully complete the course and receive a course certificate, you need to fulfil the following requirements:
<ul class="square List">

    <li>
    Complete the course <a href={{site.data.course.Quizzes["baseline"].url}}>baseline knowledge test </a> before engaging with materials and related quizzes, before <b> 13 December 2023 at 11:59 PM (ET) </b>
    </li>
    <li>
         Complete all 3 module quizzes by <b> 13 December 2023 at 11:59 PM (ET) </b> with an average score of 80% across all quizzes.
         <!-- {%include Quizzes.md %} -->
         <ul class="square">
        {% for module in site.data.course.modules %}
        {% if module contains "module" %}
            {% assign agenda=site.data.course.agenda[module] %}
            <li><a href={{site.data.course.Quizzes[module].url}} target="_blank">{{agenda.title|capitalize}} </a>  </li>
            {% endif %}
        {% endfor %}
</ul>

    </li>
        <li>
        Complete the course  <a href="{{site.data.course.Quizzes["endline"].url}}">endline knowledge test</a> after completing all 3 module quizzes by <b>13 December 2023 at 11.59pm (ET) </b>
    </li>
</ul>


Check the following link for the course tracker:
Click<a target="_blank" href="https://docs.google.com/spreadsheets/d/1wK2k4bGN4Gt5cAQAPDeB2Du_xpRNbA3-SjcgPZYXUDQ/edit#gid=1137564209"> here </a>!

