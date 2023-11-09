<div class="Quizzes">
The quizzes can be completed via the links below. <br/>
All the quizzes are due <b> 13 December 2023 at 11:59 PM EDT/GMT </b>
<div class="Quiz-List List">
    <ul class="square">
    {% for module in site.data.course.modules %}
        {% assign agenda=site.data.course.agenda[module] %}
        <li><a href={{site.data.course.Quizzes[module].url}}>{{agenda.title|capitalize}} </a>  </li>
    {% endfor %}
    </ul>
    </div>
</div>