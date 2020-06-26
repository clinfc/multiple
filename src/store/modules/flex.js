const box = [
  {
    "key": "flex-direction",
    "explain": "该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。这将决定flex需要如何进行排列：该属性的反转取值不影响元素的绘制，语音和导航顺序，只改变流动方向。这与 <' writing-mode '> 和 <' direction '> 相同",
    "values": [
      {
        "value": "row",
        "explain": "主轴与行内轴方向作为默认的书写模式。即横向从左到右排列（左对齐）"
      },
      {
        "value": "row-reverse",
        "explain": " 对齐方式与row相反"
      },
      {
        "value": "column",
        "explain": "主轴与块轴方向作为默认的书写模式。即纵向从上往下排列（顶对齐）"
      },
      {
        "value": "column-reverse",
        "explain": "对齐方式与column相反"
      }
    ]
  },
  {
    "key": "flex-wrap",
    "explain": "该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向",
    "values": [
      {
        "value": "nowrap",
        "explain": "flex容器为单行。该情况下flex子项可能会溢出容器"
      },
      {
        "value": "wrap",
        "explain": "flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行"
      },
      {
        "value": "wrap-reverse",
        "explain": "反转 wrap 排列"
      }
    ]
  },
  {
    "key": "justify-content",
    "explain": "设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式：当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制",
    "values": [
      {
        "value": "flex-start",
        "explain": "弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐"
      },
      {
        "value": "flex-end",
        "explain": "弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐"
      },
      {
        "value": "center",
        "explain": "弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）"
      },
      {
        "value": "space-between",
        "explain": "弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于'flex-start'。在其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等"
      },
      {
        "value": "space-around",
        "explain": "弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有一个伸缩盒项目，则该值等效于'center'。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半"
      }
    ]
  },
  {
    "key": "align-items",
    "explain": "定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式",
    "values": [
      {
        "value": "flex-start",
        "explain": "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界"
      },
      {
        "value": "flex-end",
        "explain": "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界"
      },
      {
        "value": "center",
        "explain": "弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）"
      },
      {
        "value": "baseline",
        "explain": "如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐"
      },
      {
        "value": "stretch",
        "explain": "如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制"
      }
    ]
  },
  {
    "key": "align-content",
    "explain": "当伸缩容器的侧轴还有多余空间时，本属性可以用来调准「伸缩行」在伸缩容器里的对齐方式，这与调准伸缩项目在主轴上对齐方式的 <' justify-content '> 属性类似。请注意本属性在只有一行的伸缩容器上没有效果",
    "values": [
      {
        "value": "flex-start",
        "explain": "各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行"
      },
      {
        "value": "flex-end",
        "explain": "各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行"
      },
      {
        "value": "center",
        "explain": "各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。）"
      },
      {
        "value": "space-between",
        "explain": "各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'flex-start'。在其它情况下，第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等。"
      },
      {
        "value": "space-around",
        "explain": "各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'center'。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半"
      },
      {
        "value": "stretch",
        "explain": "各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸"
      }
    ]
  }
]

const item = [
  {
    "key": "flex-grow",
    "explain": "设置或检索弹性盒的扩展比率（根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间）",
    "values": [
      {
        "value": "0",
        "explain": "用数值来定义扩展比率。不允许负值。默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍"
      }
    ]
  },
  {
    "key": "flex-shrink",
    "explain": "设置或检索弹性盒的收缩比率（根据弹性盒子元素所设置的收缩因子作为比率来收缩空间）",
    "values": [
      {
        "value": "1",
        "explain": "用数值来定义收缩比率。不允许负值。默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小"
      }
    ]
  },
  {
    "key": "flex-basis",
    "explain": "设置或检索弹性盒伸缩基准值（如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间）",
    "values": [
      {
        "value": "10px",
        "explain": "用长度值来定义宽度。不允许负值"
      },
      {
        "value": "20%",
        "explain": "用百分比来定义宽度。不允许负值"
      },
      {
        "value": "auto",
        "explain": "无特定宽度值，取决于其它属性值"
      },
      {
        "value": "content",
        "explain": "基于内容自动计算宽度"
      }
    ]
  },
  {
    "key": "align-self",
    "explain": "定义flex子项单独在侧轴（纵轴）方向上的对齐方式",
    "values": [
      {
        "value": "auto",
        "explain": "如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'"
      },
      {
        "value": "flex-start",
        "explain": "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界"
      },
      {
        "value": "flex-end",
        "explain": "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界"
      },
      {
        "value": "center",
        "explain": "弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）"
      },
      {
        "value": "baseline",
        "explain": "如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐"
      },
      {
        "value": "stretch",
        "explain": "如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制"
      }
    ]
  }
]

let selected = {
  "flex-grow": 1,
  "flex-shrink": 0,
  "flex-basis": "auto",
  "align-self": "auto"
}
box.forEach(row => {
  selected[row.key] = row.values[0].value
})

let state = () => ({
  box,
  item,
  selected
})

let mutations = {
  select(state, [ key, value ]) {
    state.selected[key] = value
  }
}

let actions = {
  select({commit}, data) {
    commit('select', data)
  }
}

export default { namespaced: true, state, mutations, actions }
