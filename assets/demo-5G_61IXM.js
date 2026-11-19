const e="api-1795067323-9b934d",t={mode:"team",reasons:["能力类别数=2，满足组队门槛(≥2)","任务需要交叉验证（存在多项必需能力或冲突约束）"],profile:{capability_categories:2,needs_cross_validation:!0,failure_cost:"low",workload:"medium"},capability_source:"preregistered_task",matched_task_id:"task-001"},n="auto",s="team_protocol",c="FINALIZED",a="mock",i=[],r=["evidence_check","information_retrieval","requirement_analysis","task_decomposition"],o=null,l=[{id:"planner",name:"任务规划员",category:"统筹规划",description:"将用户诉求拆解为可执行的任务图，产出子任务、依赖关系与验收条件。",capabilities:["task_decomposition","requirement_analysis"],boundaries:"只负责拆解与规划，不执行检索、不给最终结论、不参与质量审查。",acceptance:"子任务覆盖任务全部需求；能力标签集合非空且粒度一致。",budget:{max_calls:3,max_tokens:2e4}},{id:"researcher",name:"资料研究员",category:"研究分析",description:"围绕子任务检索并整理资料，产出发现、可溯源证据与不确定点。",capabilities:["information_retrieval","evidence_collection"],boundaries:"只陈述检索到的事实并附来源，不臆测、不下最终结论、不审查他人产出。",acceptance:"每条发现均有证据引用；证据含来源与原文；不确定点已显式披露。",budget:{max_calls:5,max_tokens:4e4}},{id:"reviewer",name:"质量审查员",category:"审查把关",description:"对交付物执行质量审查：检查证据是否支持主张、结论间是否存在实质矛盾、产出是否回应任务要求。",capabilities:["evidence_check","contradiction_detection","requirement_verification"],boundaries:"独立于生产讨论（会话与上下文隔离），只接收待检产物与规则库；无依据必须指出，不通过个人印象下结论。",acceptance:"每条主张均有四态判定；判定均附依据；未解决缺口显式列出。",budget:{max_calls:3,max_tokens:2e4}}],u=["planner","researcher","reviewer"],d={R1:[{role:"planner",summary:"[R1] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}},{role:"researcher",summary:"[R1] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}},{role:"reviewer",summary:"[R1] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}}],R2:[{role:"planner",summary:"[R2] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}},{role:"researcher",summary:"[R2] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}},{role:"reviewer",summary:"[R2] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}}],R3:[{role:"planner",summary:"[R3] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}},{role:"researcher",summary:"[R3] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}},{role:"reviewer",summary:"[R3] claims=1，证据支持率=100%",cost:{calls:1,output_characters:288,latency_ms:1}}],R4:[],COMPOSE:[{role:"writer",summary:"",cost:{calls:1,output_characters:823,latency_ms:1}}]},_=[],m=[{decision:{passed:!0,layer:"evidence_reference_integrity",evidence_status:{reference_exists:"passed",source_integrity:"passed",quote_support:"pending",final_status:"unverified"},invalid_references:{},integrity_failures:[]},summary:"证据三层校验：L1 引用存在性与 L2 存档完整性通过，L3 语义支持状态为 pending（待审查员与人工标注），final_status=unverified，不得解读为语义支持通过"},{decision:{passed:!0,missing_capabilities:[],reviewer_findings:{total:1,supported:1,flagged:[]},missing_tools:[],structure_problems:{},convergence:{total_claims:1,reference_support_rate:1,unresolved_contradictions:0,thresholds:{max_unresolved_contradictions:1,min_evidence_support_rate:.8},gaps:[],excluded_from_rounds:[],revision_diff:{r1_total:1,r3_total:3,new_in_r3:[]}}},summary:""},{decision:{status:"accepted",reference_exists:"passed",source_integrity:"passed",pending_lines:9,semantic_review:"not_performed"},summary:""}],p=[{key:"TEAMED",label:"动态组队"},{key:"EXECUTING",label:"智能体执行"},{key:"AUDITED",label:"治理审计"},{key:"EXECUTING",label:"智能体执行"},{key:"AUDITED",label:"治理审计"},{key:"EXECUTING",label:"智能体执行"},{key:"AUDITED",label:"治理审计"},{key:"FINALIZED",label:"FINALIZED"}],v=null,y={evidence_sources:[{evidence_id:"E001",source_title:"国务院关于印发全民科学素质行动规划纲要（2021—2035年）的通知",source_url:"https://www.gov.cn/zhengce/content/2021-06/25/content_5620813.htm",published_at:"2021-06-25",quote:"发文字号：国发〔2021〕9号",origin:"evidence_pack"},{evidence_id:"E002",source_title:"第55次《中国互联网络发展状况统计报告》发布",source_url:"https://www.cnnic.net.cn/n4/2025/0117/c88-11229.html",published_at:"2025-01-17",quote:"《报告》显示，网民规模从1997年的62万人增长至2024年的11.08亿人，互联网普及率升至78.6%。",origin:"evidence_pack"},{evidence_id:"E003",source_title:"我校学生科创嘉年华暨第四十一届学术科技文化节启幕（东华大学新闻网）",source_url:"https://news.dhu.edu.cn/2025/1025/c523a425188/pagem.htm",published_at:"2025-10-25",quote:'10月24日，科创东华，当"燃"有我——2025东华大学学生科创嘉年华暨第四十一届学术科技文化节火热启幕。活动由校团委、校科学技术协会学生分会主办，科学技术研究院、国际教育中心、后勤服务中心及各学院协办。党委副书记李成龙出席，近2000名师生以及东华大学附属松江高级中学、附属实验学校的师生代表参加活动。',origin:"evidence_pack"},{evidence_id:"E004",source_title:"学生活动经费申请指引（2026年）（北京服装学院学生事务处）",source_url:"https://sao.bnbu.edu.cn/info/1067/2073.htm",published_at:"2026 年（官方指引）",quote:"横幅：建议 1 条，视活动具体情况而定，100 元/条；为避免浪费，重点支持大型活动；活动横幅一般不超过 0.8m×6m，15 元/㎡，社团招新横幅尺寸为活动横幅的一半。",origin:"evidence_pack"},{evidence_id:"E005",source_title:"关于全校宣传展板、条幅制作服务的通知（哈尔滨学院）",source_url:"http://www.hrbu.edu.cn/info/1013/209221.htm",published_at:"高校官方通知",quote:"展板定制：48.38 元/平方米。",origin:"evidence_pack"},{evidence_id:"E006",source_title:"团委财务管理制度（湘潭大学团委）",source_url:"https://tw.xtu.edu.cn/info/1032/1235.htm",published_at:"高校官方制度",quote:"（译注：预算编制的流程要求：提前 14 天审核、物资明细逐项列清、决算留档，可作为方案的预算管理规范引用。）",origin:"evidence_pack"}],composition:{status:"accepted",reference_exists:"passed",source_integrity:"passed",pending_lines:9,semantic_review:"not_performed"},conclusion:`> 引用存在性已校验；语义支持未获人工终审。待核验内容须确认后使用。

# 任务交付方案

【待核验】Mock 成稿，仅供链路联调。

## 背景
发文字号：国发〔2021〕9号 [E001]
《报告》显示，网民规模从1997年的62万人增长至2024年的11.08亿人，互联网普及率升至78.6%。 [E002]
10月24日，科创东华，当"燃"有我——2025东华大学学生科创嘉年华暨第四十一届学术科技文化节火热启幕。活动由校团委、校科学技术协会学生分会主办，科学技术研究院、国际教育中心、后勤服务中心及各学院协办。党委副书记李成龙出席，近2000名师生以及东华大学附属松江高级中学、附属实验学校的师生代表参加活动。 [E003]
横幅：建议 1 条，视活动具体情况而定，100 元/条；为避免浪费，重点支持大型活动；活动横幅一般不超过 0.8m×6m，15 元/㎡，社团招新横幅尺寸为活动横幅的一半。 [E004]
展板定制：48.38 元/平方米。 [E005]
（译注：预算编制的流程要求：提前 14 天审核、物资明细逐项列清、决算留档，可作为方案的预算管理规范引用。） [E006]

## 目标
【待核验】本节须结合任务要求补充并确认，现有素材不足以确定。

## 活动流程
【待核验】本节须结合任务要求补充并确认，现有素材不足以确定。

## 预算表
| 【待核验】 项目 | 金额 | 依据 |
| --- | --- | --- |
| 【待核验】预算明细 | 待核验 | 缺少已核验预算 |

## 宣传渠道矩阵
| 【待核验】 渠道 | 执行动作 | 依据 |
| --- | --- | --- |
| 【待核验】渠道安排 | 待核验 | 需确认执行资源 |

## 风险预案
【待核验】本节须结合任务要求补充并确认，现有素材不足以确定。

## 验收对照
【待核验】方案含预算与渠道两部分；每个关键结论有可溯源证据`,presentation:{summary:`> 引用存在性已校验；语义支持未获人工终审。待核验内容须确认后使用。

# 任务交付方案

【待核验】Mock 成稿，仅供链路联调。

## 背景
发文字号：国发〔2021〕9号 [E001]
《报告》显示，网民规模从1997年的62万人增长至2024年的11.08亿人，互联网普及率升至78.6%。 [E002]
10月24日，科创东华，当"燃"有我——2025东华大学学生科创嘉年华暨第四十一届学术科技文化节火热启幕。活动由校团委、校科学技术协会学生分会主办，科学技术研究院、国际教育中心、后勤服务中心及各学院协办。党委副书记李成龙出席，近2000名师生以及东华大学附属松江高级中学、附属实验学校的师生代表参加活动。 [E003]
横幅：建议 1 条，视活动具体情况而定，100 元/条；为避免浪费，重点支持大型活动；活动横幅一般不超过 0.8m×6m，15 元/㎡，社团招新横幅尺寸为活动横幅的一半。 [E004]
展板定制：48.38 元/平方米。 [E005]
（译注：预算编制的流程要求：提前 14 天审核、物资明细逐项列清、决算留档，可作为方案的预算管理规范引用。） [E006]

## 目标
【待核验】本节须结合任务要求补充并确认，现有素材不足以确定。

## 活动流程
【待核验】本节须结合任务要求补充并确认，现有素材不足以确定。

## 预算表
| 【待核验】 项目 | 金额 | 依据 |
| --- | --- | --- |
| 【待核验】预算明细 | 待核验 | 缺少已核验预算 |

## 宣传渠道矩阵
| 【待核验】 渠道 | 执行动作 | 依据 |
| --- | --- | --- |
| 【待核验】渠道安排 | 待核验 | 需确认执行资源 |

## 风险预案
【待核验】本节须结合任务要求补充并确认，现有素材不足以确定。

## 验收对照
【待核验】方案含预算与渠道两部分；每个关键结论有可溯源证据`,plans:[]},claim_evidence_appendix:[{role:"planner",statement:"发文字号：国发〔2021〕9号",status:"supported",evidence_ids:["E001"],quote_exists:!0,cited_evidence:[{evidence_id:"E001",quote:"发文字号：国发〔2021〕9号"}]},{role:"researcher",statement:"发文字号：国发〔2021〕9号",status:"supported",evidence_ids:["E001"],quote_exists:!0,cited_evidence:[{evidence_id:"E001",quote:"发文字号：国发〔2021〕9号"}]},{role:"reviewer",statement:"发文字号：国发〔2021〕9号",status:"supported",evidence_ids:["E001"],quote_exists:!0,cited_evidence:[{evidence_id:"E001",quote:"发文字号：国发〔2021〕9号"}]}],gap_disclosure:[],governance_summary:{governed:!0,audit_passed:!0,repairs:0,unresolved:[],evidence_status:{reference_exists:"passed",source_integrity:"passed",quote_support:"pending",final_status:"unverified"},reviewer_findings:{total:1,supported:1,flagged:[]}},cost_statistics:{calls:10,tokens:3415,latency_ms:10}},b={task:"为校园科技节制定一份包含预算和宣传渠道的活动方案，并核验关键结论的证据",task_id:"task-001",engine:"mock",source:"runs/web-demo/api-1795067323-9b934d.jsonl",trace_sha256:"dfcbe0d0dcefd429598ad83f969dfc91328b04221feb852b58b5a0ce31eb23aa",code_commit:"234ac902d61dc331a23bf6840f288b131f455648"},g={run_id:e,route:t,selection:n,executed_mode:s,status:c,execution_engine:a,reputation_updated:i,required_capabilities:r,injection_result:o,team:l,team_initial:u,rounds:d,repairs:_,audits:m,states:p,trace_replay:v,deliverable:y,demo:b};export{m as audits,g as default,y as deliverable,b as demo,s as executed_mode,a as execution_engine,o as injection_result,_ as repairs,i as reputation_updated,r as required_capabilities,d as rounds,t as route,e as run_id,n as selection,p as states,c as status,l as team,u as team_initial,v as trace_replay};
